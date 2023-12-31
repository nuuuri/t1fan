import axios from 'axios';

import { redisConnect } from 'lib/redisConnect';

export async function GET() {
  const len = await redisConnect.llen('youtube');

  const data = { items: [] as any[] };

  try {
    if (len) {
      (await redisConnect.lrange('youtube', 0, -1)).forEach((item) => {
        data.items.push(JSON.parse(item));
      });
    } else {
      const res1 = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            key: process.env.YOUTUBE_API_KEY,
            q: 'T1',
            part: 'snippet',
            type: 'video',
            maxResults: 25,
            fields: 'items(id, snippet(title))',
            videoEmbeddable: true,
          },
        },
      );
      const res2 = await axios.get(
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
      const res3 = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            key: process.env.YOUTUBE_API_KEY,
            q: '페이커',
            part: 'snippet',
            type: 'video',
            maxResults: 25,
            fields: 'items(id, snippet(title))',
            videoEmbeddable: true,
          },
        },
      );

      data.items = [...res1.data.items, ...res2.data.items, ...res3.data.items];

      data.items.forEach((item) => {
        redisConnect.lpush('youtube', JSON.stringify(item));
      });
    }

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
