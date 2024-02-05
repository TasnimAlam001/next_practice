import getAllPosts from "@/data/getAllPosts";
import getPost from "@/data/getPost";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: `Post | ${post.title}`,
    description: post.body,
  };
}

export default async function postPage({ params }) {
  const { id } = params;
  const post = await getPost(id);
  //console.log(post);
  return (
    <div>
      <h1> post id : {id}</h1>
      <p className="my-6 font-bold">Post Title: {post.title}</p>
      <p>Post Title: {post.body}</p>
    </div>
  );
}

// when we get any data dynaicly.. that page will turn to dynamic page.. to make it SSG .. we have to do this....


export async function generateStaticParams(){
  const posts = await getAllPosts();

  return posts.map((post)=>({
      id:post.id.toString(),
  }))
}

