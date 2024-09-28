import axiosInstance from '@/lib/axiosInstance';
import getRedditAccessToken from '@/utlis/reddit';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, {params}: {params: {id: string}}) => {
    
    const id = params?.id

    const token = await getRedditAccessToken();
    if (!token) {
        return NextResponse.json({ error: 'Failed to retrieve access token' }, { status: 500 });
    }

    try {
        const response = await axiosInstance.get(`/comments/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'User-Agent': 'ChangeMeClient/0.1 by YourUsername',
            }
        })
      
        console.log(response.data);
        return NextResponse.json(response.data);
    } catch (err) {
        console.log('Failed to fetch data:', err);
        return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 404 });
    }
} 
