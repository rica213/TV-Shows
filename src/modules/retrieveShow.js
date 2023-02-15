const retrieveShow = async (url, id) => {
  const requestURL = `${url}shows/${id}`;
  const request = new Request(requestURL);
  const response = await fetch(request);
  const show = await response.json();
  return show;
};

export default retrieveShow;
