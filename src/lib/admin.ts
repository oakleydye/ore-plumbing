import { db } from '@/lib/db';

// Contact Requests
export async function getContactRequests() {
  try {
    const requests = await db.contactRequest.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return requests.map(request => ({
      ...request,
      createdAt: request.createdAt.toISOString(),
      updatedAt: request.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching contact requests:', error);
    return [];
  }
}

export async function getContactRequestById(id: string) {
  try {
    const request = await db.contactRequest.findUnique({
      where: { id },
    });

    if (!request) return null;

    return {
      ...request,
      createdAt: request.createdAt.toISOString(),
      updatedAt: request.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error('Error fetching contact request:', error);
    return null;
  }
}

// Job Bids
export async function getJobBids() {
  try {
    const bids = await db.jobBid.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return bids.map(bid => ({
      ...bid,
      createdAt: bid.createdAt.toISOString(),
      updatedAt: bid.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching job bids:', error);
    return [];
  }
}

export async function getJobBidById(id: string) {
  try {
    const bid = await db.jobBid.findUnique({
      where: { id },
    });

    if (!bid) return null;

    return {
      ...bid,
      createdAt: bid.createdAt.toISOString(),
      updatedAt: bid.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error('Error fetching job bid:', error);
    return null;
  }
}

// Job Photos
export async function getJobPhotos() {
  try {
    const photos = await db.jobPhoto.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return photos.map(photo => ({
      ...photo,
      createdAt: photo.createdAt.toISOString(),
      updatedAt: photo.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching job photos:', error);
    return [];
  }
}

export async function getPublicJobPhotos() {
  try {
    const photos = await db.jobPhoto.findMany({
      where: { isPublic: true },
      orderBy: { createdAt: 'desc' },
    });

    return photos.map(photo => ({
      ...photo,
      createdAt: photo.createdAt.toISOString(),
      updatedAt: photo.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching public job photos:', error);
    return [];
  }
}

// Reviews
export async function getReviews() {
  try {
    const reviews = await db.review.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return reviews.map(review => ({
      ...review,
      createdAt: review.createdAt.toISOString(),
      updatedAt: review.updatedAt.toISOString(),
      jobDate: review.jobDate?.toISOString() || null,
    }));
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

export async function getApprovedReviews() {
  try {
    const reviews = await db.review.findMany({
      where: { approved: true },
      orderBy: { createdAt: 'desc' },
    });

    return reviews.map(review => ({
      ...review,
      createdAt: review.createdAt.toISOString(),
      updatedAt: review.updatedAt.toISOString(),
      jobDate: review.jobDate?.toISOString() || null,
    }));
  } catch (error) {
    console.error('Error fetching approved reviews:', error);
    return [];
  }
}

export async function getFeaturedReviews() {
  try {
    const reviews = await db.review.findMany({
      where: { 
        approved: true,
        featured: true 
      },
      orderBy: { createdAt: 'desc' },
    });

    return reviews.map(review => ({
      ...review,
      createdAt: review.createdAt.toISOString(),
      updatedAt: review.updatedAt.toISOString(),
      jobDate: review.jobDate?.toISOString() || null,
    }));
  } catch (error) {
    console.error('Error fetching featured reviews:', error);
    return [];
  }
}

// Blog Posts (Admin)
export async function getAllBlogPosts() {
  try {
    const posts = await db.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return posts.map(post => ({
      ...post,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching all blog posts:', error);
    return [];
  }
}

export async function getBlogPostById(id: string) {
  try {
    const post = await db.blogPost.findUnique({
      where: { id },
    });

    if (!post) return null;

    return {
      ...post,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Dashboard Stats
export async function getDashboardStats() {
  try {
    const [
      totalContactRequests,
      pendingContactRequests,
      totalJobBids,
      pendingJobBids,
      totalBlogPosts,
      publishedBlogPosts,
      totalReviews,
      approvedReviews,
      totalJobPhotos,
    ] = await Promise.all([
      db.contactRequest.count(),
      db.contactRequest.count({ where: { status: 'pending' } }),
      db.jobBid.count(),
      db.jobBid.count({ where: { status: 'pending' } }),
      db.blogPost.count(),
      db.blogPost.count({ where: { published: true } }),
      db.review.count(),
      db.review.count({ where: { approved: true } }),
      db.jobPhoto.count(),
    ]);

    return {
      contactRequests: {
        total: totalContactRequests,
        pending: pendingContactRequests,
      },
      jobBids: {
        total: totalJobBids,
        pending: pendingJobBids,
      },
      blogPosts: {
        total: totalBlogPosts,
        published: publishedBlogPosts,
      },
      reviews: {
        total: totalReviews,
        approved: approvedReviews,
      },
      jobPhotos: {
        total: totalJobPhotos,
      },
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return {
      contactRequests: { total: 0, pending: 0 },
      jobBids: { total: 0, pending: 0 },
      blogPosts: { total: 0, published: 0 },
      reviews: { total: 0, approved: 0 },
      jobPhotos: { total: 0 },
    };
  }
}
