import Link from 'next/link'
import React from 'react'


export const metadata = {
  title: "Tasnim Alam | About",
  description: "About My Self",
};

export default function AboutLayout({children}) {
  return (
    <div className='mt-4'>
      <nav>
          <ul className="flex gap-5">
            <li><Link href="/about/mission"> Mission</Link> </li>
            <li><Link href="/vission"> Vission</Link> </li>
          </ul>
        </nav>
      {children}
    </div>
  )
}
