import axios from 'axios';

export async function GET() {
  try {
    const res = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          key: process.env.YOUTUBE_API_KEY,
          q: '티원',
          part: 'snippet',
          type: 'video',
          maxResults: 25,
          fields: 'items(id, snippet(title))',
          videoEmbeddable: true,
        },
      },
    );

    const data = res.data;

    return new Response(JSON.stringify({ videos: data.items }), {
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        vidoes: [],
      }),
      {
        status: 403,
        statusText: 'daily quota exceeded',
      },
    );
  }
}
