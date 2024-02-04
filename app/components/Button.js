"use client";
import React from 'react'

export default function Button() {
  return (
    <div>
      <button onClick={()=>console.log('i clicked')} className="btn bg-green-400 p-3">Click Me</button>
    </div>
  )
}
