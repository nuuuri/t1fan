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

  return (
    <div>
      <div>
        {videos.map((video: any, idx: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={idx}>
            <div className="flex">
              <div className="w-7">{idx + 1}</div>
              <div>{video.snippet.title}</div>
            </div>
            <iframe
              title={video.snippet.title}
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              width={720}
              height={360}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
