import { headers } from 'next/headers';

const getData = async () => {
  const host = headers().get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

  const result = await fetch(`${protocol}://${host}/api/videos`);

  if (!result.ok) {
    throw new Error(result.statusText);
  }

  return result.json();
};

export default async function VideoColletionPage() {
  const { videos } = await getData();

  console.log(videos);

  return (
    <div>
      <div>영상 모아보기</div>
      <div>
        {videos?.map(
          (
            video: {
              id: { kind: string; videoId: string };
              snippet: { title: string };
            },
            idx: number,
          ) => (
            <div key={video.id.videoId}>
              <div>{idx}</div>
              <div>{video.snippet.title}</div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
