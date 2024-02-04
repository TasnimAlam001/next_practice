import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        Requested page is not found. <br></br>

        Go Back to <Link href="/" className='text-blue-400'> Home</Link>
      
    </div>
  )
}
