const getLikes = async (requestURL) => {
  const request = new Request(requestURL);

  const response = await fetch(request);
  const likes = await response.json();
  return likes;
}

export default getLikes;