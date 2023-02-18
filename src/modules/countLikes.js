const countLikes = (obj, id) => obj.find((liked) => liked.item_id === id).likes;

export default countLikes;
