const retrieve = async (requestURL, id) => {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

export default retrieve;
