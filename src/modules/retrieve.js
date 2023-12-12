const retrieve = async (requestURL) => {
  const request = new Request(requestURL);
  const response = await fetch(request);
  return response.json();
};

export default retrieve;
