import getAllPosts from "@/data/getAllPosts";
import Link from "next/link";
import React from "react";

export default async function page() {
  const posts = await getAllPosts();
  //console.log(posts);
  return (
    <div>
      <h1>Total Posts: {posts.length} </h1>
      <ol className="mt-10">{posts.map((post, index)=> <li key={post.id}><Link href={`/posts/${post.id}`}>{index+1}. {post.title} </Link> </li>)}</ol>
    </div>
  );
}


