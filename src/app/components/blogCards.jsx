"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BlogCards({ image, author, content, title, key, date, id }) {
  const router = useRouter();

  return (
    <div className='blogs-card-main' key={key} onClick={() => router.push(`/blog/${id}`)}>
        <div className="blogs-container">
            <div className="blogs-image">
                <Image src={image} height={100} width={100} unoptimized={true} alt='blog-image' />
            </div>

            <div className="blogsCard-content">
                <h3>{title}</h3>
                <p className='p1'>{`By ${author}`}<span>{date}</span></p>
                <p className='p2'>{`${content} .....`}</p>
                <Link href={`/blog/${id}`} style={{textDecoration: "none"}}><p className='p3'>Read more...</p></Link>
            </div>
        </div>
    </div>
  )
}
