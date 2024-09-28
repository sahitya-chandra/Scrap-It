'use server'

import axiosInstance from "@/lib/axiosInstance";
import getRedditAccessToken from "@/utlis/reddit";


export async function comments(id: string) {

    const token = await getRedditAccessToken();
    if (!token) {
        return 'Failed to retrieve access token'
    }

    try {
        const response = await axiosInstance.get(`/comments/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'User-Agent': 'ChangeMeClient/0.1 by YourUsername',
            }
        })
      
        console.log(response.data);
        return response.data
    } catch (err) {
        console.log('Failed to fetch data:', err);
        return 'Failed to fetch comments' 
    }
}