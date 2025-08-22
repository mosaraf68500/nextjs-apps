import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div>
      <h1>about section</h1>
      <Link href="/About/Address">
      <button type='btn'>address</button>
      
      </Link>
    </div>
  )
}
