export const fetchWrapper = {
  post,
  get,
};

async function post(endpoint, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/${endpoint}`, requestOptions);
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    return { error: "We're having issues processing your request. Please try again later." };
  }
}

async function get(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    return { error: "We're having issues processing your request. Please try again later." };
  }
}
