export default async function getAllPosts(){
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      /*..Next js stored a visited page in cache autometicly. so we dont have to use --  cache:"force-cache"-- cmnd

      but if we want to reload a page for every visit [content on that page might be continusly updating ] we have to use 
      --cache: "no-store",-- But *** it will convert the page to dynamic-render...

      to Avoid that, we have to use   -- 
      
      next: {

          revalidate: 10,
      }-- it will check for update in every 10 sec.. and also The page will remain static
     
      */

      next: {
        revalidate:10,
      }
    }
    );

    if(!posts.ok){
        throw new Error("there is an error while fetching the data")
      }
    return posts.json();


}