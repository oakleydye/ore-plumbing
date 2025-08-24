# Ore Plumbing Admin Dashboard

A comprehensive admin dashboard for managing the plumbing business website and customer interactions.

## Features

### 1. Dashboard Overview
- Real-time statistics on pending requests, bids, and reviews
- Quick action buttons for common tasks
- Activity monitoring

### 2. Contact Request Management
- View all customer contact requests
- Respond to inquiries directly through the admin interface
- Track response status (pending, responded, closed)
- Filter by urgency level (emergency, urgent, normal, quote)

### 3. Job Photos Management
- Upload before/after photos of completed work
- Toggle photos between public/private visibility
- Organize by service type and location
- Photos are automatically stored in `/public/uploads/job-photos/`

### 4. Blog Management
- Create and edit blog posts with Markdown support
- SEO optimization fields (title, description, meta tags)
- Draft/publish workflow
- URL slug management
- Featured image support

### 5. Job Bids Management
- Track customer project requests
- Send quotes and manage bid status
- Update project status (pending → quoted → accepted → completed)
- Customer communication tracking

### 6. Reviews Management
- Approve/reject customer reviews
- Feature outstanding reviews
- Respond to customer feedback
- Star rating system (1-5 stars)

## Database Schema

The system uses SQLite with Prisma ORM and includes these models:
- `ContactRequest` - Customer inquiries
- `JobPhoto` - Before/after project photos
- `BlogPost` - Blog content with SEO fields
- `JobBid` - Project quotes and bids
- `Review` - Customer reviews and ratings

## Getting Started

1. **Access the Admin Dashboard**
   - Navigate to `/admin` in your browser
   - Currently open access (Auth0 integration pending)

2. **File Uploads**
   - Job photos are stored locally in `public/uploads/job-photos/`
   - For production, consider integrating Cloudinary for better image management

3. **Database Management**
   - SQLite database is stored in `prisma/dev.db`
   - Use `npx prisma studio` to view/edit data directly

## API Endpoints

### Dashboard Stats
- `GET /api/admin/dashboard-stats` - Get overview statistics

### Contact Requests
- `GET /api/admin/contact-requests` - List all requests
- `PATCH /api/admin/contact-requests/[id]` - Update request
- `DELETE /api/admin/contact-requests/[id]` - Delete request

### Job Photos
- `GET /api/admin/job-photos` - List all photos
- `POST /api/admin/job-photos` - Upload new photos
- `PATCH /api/admin/job-photos/[id]` - Update photo details
- `DELETE /api/admin/job-photos/[id]` - Delete photo

### Blog Posts
- `GET /api/admin/blog` - List all posts
- `POST /api/admin/blog` - Create new post
- `GET /api/admin/blog/[id]` - Get specific post
- `PATCH /api/admin/blog/[id]` - Update post
- `DELETE /api/admin/blog/[id]` - Delete post

### Job Bids
- `GET /api/admin/job-bids` - List all bids
- `POST /api/admin/job-bids` - Create new bid
- `PATCH /api/admin/job-bids/[id]` - Update bid
- `DELETE /api/admin/job-bids/[id]` - Delete bid

### Reviews
- `GET /api/admin/reviews` - List all reviews
- `POST /api/admin/reviews` - Create new review
- `PATCH /api/admin/reviews/[id]` - Update review
- `DELETE /api/admin/reviews/[id]` - Delete review

## Next Steps

1. **Auth0 Integration**
   - Set up Auth0 account and configure environment variables
   - Add authentication middleware protection
   - Configure user roles and permissions

2. **Email Integration**
   - Set up automated responses for contact requests
   - Email notifications for new bids/reviews

3. **Image Management**
   - Integrate Cloudinary for better image hosting
   - Add image optimization and compression

4. **Public Gallery**
   - Create public gallery page showing approved job photos
   - Add filtering by service type

5. **Blog Frontend**
   - Create public blog pages to display published posts
   - Add SEO metadata and social sharing

## Development

- Built with Next.js 15 and React 19
- Uses Tailwind CSS for styling
- Prisma for database management
- TypeScript for type safety

## Environment Variables

```bash
# Database
DATABASE_URL="file:./dev.db"

# Email (Resend)
RESEND_API_KEY=your_resend_api_key

# Auth0 (for future implementation)
AUTH0_SECRET=your_auth0_secret
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://your-domain.auth0.com
AUTH0_CLIENT_ID=your_client_id
AUTH0_CLIENT_SECRET=your_client_secret

# Cloudinary (optional)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
