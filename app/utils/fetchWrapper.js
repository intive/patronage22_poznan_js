export const fetchWrapper = {
  post,
};

async function post(endpoint, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, requestOptions);
    return { status: response.status, data: response.json() };
  } catch (error) {
    return { error: "We're having issues processing your request. Please try again later." };
  }
}
