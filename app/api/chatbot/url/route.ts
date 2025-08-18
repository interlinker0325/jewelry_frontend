import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Extract URL data from request body
    const {
      fullUrl,
      path,
      hostname,
      timestamp,
      userAgent,
      referrer
    } = body

    // Log the received data (you can replace this with your actual backend logic)
    console.log('Chatbot URL Data Received:', {
      fullUrl,
      path,
      hostname,
      timestamp,
      userAgent,
      referrer
    })

    // Here you can add your backend logic:
    // - Store in database
    // - Send to external API
    // - Process analytics
    // - Track user behavior
    // - etc.

    // Example: You could send this data to your main backend service
    // const backendResponse = await fetch('https://your-backend.com/api/chatbot/url', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body)
    // })

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'URL data received successfully',
      receivedAt: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error processing chatbot URL data:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process URL data' 
      },
      { status: 500 }
    )
  }
}
