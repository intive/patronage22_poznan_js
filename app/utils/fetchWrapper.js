export const fetchWrapper = {
  post,
  get,
  put,
  delete: _delete,
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
    handleFetchError(error);
  }
}

async function get(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    handleFetchError(error);
  }
}

async function put(url) {
  const requestOptions = {
    method: 'PUT',
  };
  try {
    await fetch(url, requestOptions);
  } catch (error) {
    console.error(error);
  }
}

async function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
  };
  try {
    await fetch(url, requestOptions);
  } catch (error) {
    console.error(error);
  }
}

function handleFetchError(error) {
  return { [error]: "We're having issues processing your request. Please try again later." };
}
