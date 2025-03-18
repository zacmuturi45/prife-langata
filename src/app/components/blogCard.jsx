"use client"

import Image from 'next/image'
import React from 'react'
import { arrow, arrowdown } from '../../../public/imports'
import { useRouter } from 'next/navigation'

export default function BlogCard({ image, date, category, title, time, index, id }) {
    const router = useRouter();
  return (
    <div className='blog-card-main' key={index} onClick={() => router.push(`/blog/${id}`)}>
        <div className='blog-card-image'>
            <Image src={image} width={120} height={120} unoptimized="true" alt='blog-image' />
        </div>

        <div className='blog-div'>
            <div className="card-title">
                <div><p>{date}</p></div>
                <div>{category}</div>
            </div>
            <h4>{title}</h4>
            <div className="card-footer">
                <div className='card-footer-child'>
                    <p>Read More</p>
                    <Image src={arrow} width={20} height={20} alt='arrow-right' />
                </div>
                <div><p>{time}</p></div>
            </div>
        </div>
    </div>
  )
}
