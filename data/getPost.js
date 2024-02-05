export default async function getPost(id) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if(!post.ok){
    throw new Error("there is an error while fetching the data")
  }

  return post.json();
}
