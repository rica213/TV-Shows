const generateId = (max) => {
  return Math.floor(Math.random() * max) + 1;
}

export default generateId;