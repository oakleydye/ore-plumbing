import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // For now, skip authentication - you can add it back later
    
    // Get dashboard statistics
    const [
      pendingContacts,
      pendingBids,
      pendingReviews,
      totalPhotos,
      publishedPosts
    ] = await Promise.all([
      db.contactRequest.count({
        where: { status: 'pending' }
      }),
      db.jobBid.count({
        where: { status: 'pending' }
      }),
      db.review.count({
        where: { approved: false }
      }),
      db.jobPhoto.count(),
      db.blogPost.count({
        where: { published: true }
      })
    ]);

    return NextResponse.json({
      pendingContacts,
      pendingBids,
      pendingReviews,
      totalPhotos,
      publishedPosts
    });

  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
