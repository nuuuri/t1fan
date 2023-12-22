export async function GET() {
  return new Response(JSON.stringify({ name: 'hello' }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
