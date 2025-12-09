import { NextRequest, NextResponse } from 'next/server';

// Example API route for bookmarks
// This will be accessible at /api/bookmarks

export async function GET(request: NextRequest) {
  // Example: Fetch bookmarks from database
  const bookmarks = [
    { id: 1, title: 'Example Bookmark', url: 'https://example.com', tags: ['example'] },
  ];
  
  return NextResponse.json({ bookmarks });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, url, tags } = body;
    
    // Validate input
    if (!title || !url) {
      return NextResponse.json(
        { error: 'Title and URL are required' },
        { status: 400 }
      );
    }
    
    // Example: Save bookmark to database
    const newBookmark = {
      id: Date.now(),
      title,
      url,
      tags: tags || [],
    };
    
    return NextResponse.json({ bookmark: newBookmark }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Bookmark ID is required' },
        { status: 400 }
      );
    }
    
    // Example: Delete bookmark from database
    return NextResponse.json({ success: true, message: 'Bookmark deleted' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete bookmark' },
      { status: 500 }
    );
  }
}

