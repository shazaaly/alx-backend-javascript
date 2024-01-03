export default function handleResponseFromAPI(promise) {
  return promise.then((success) => {
    const data = {
      status: 200,
      body: success,

    };
    console.log('Got a response from the API');
    return data;
  }).catch((error) => error);
}
