import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { unlink } from 'fs/promises';
import { join } from 'path';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { isPublic, title, description } = body;

    const updatedPhoto = await db.jobPhoto.update({
      where: { id },
      data: {
        isPublic,
        title,
        description,
        updatedAt: new Date()
      }
    });

    return NextResponse.json(updatedPhoto);
  } catch (error) {
    console.error('Error updating job photo:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    // Get photo details before deleting
    const photo = await db.jobPhoto.findUnique({
      where: { id }
    });

    if (!photo) {
      return NextResponse.json(
        { error: 'Photo not found' },
        { status: 404 }
      );
    }

    // Delete files from filesystem
    try {
      const publicDir = join(process.cwd(), 'public');
      await unlink(join(publicDir, photo.beforeUrl));
      await unlink(join(publicDir, photo.afterUrl));
    } catch (error) {
      console.warn('Could not delete files:', error);
    }

    // Delete from database
    await db.jobPhoto.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting job photo:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
