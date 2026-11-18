export async function askLakshAI(message) {
  const endpoint = import.meta.env.VITE_AI_ENDPOINT;
  if (!endpoint) return null;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  if (!response.ok) throw new Error('AI endpoint unavailable');
  return (await response.json()).answer || null;
}
