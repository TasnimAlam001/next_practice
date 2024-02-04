import Link from "next/link"


export default function Blogs() {
    const Blogs =[

        {
            id: 1,
            title:" Blog 1",
            discription: "Blog 1 discription"

        },
        {
            id: 2,
            title:" Blog 2",
            discription: "Blog 2 discription"

        },
        {
            id: 3,
            title:" Blog 3",
            discription: "Blog 3 discription"

        },
    ]
  return (
    <div>
        {Blogs.map(blog=><ul key={blog.id}>

            <li><Link href={`/blogs/${blog.id}`}>{blog.title}</Link> </li>
        </ul>)}
      
    </div>
  )
}
