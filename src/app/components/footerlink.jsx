import Link from 'next/link'
import React from 'react'

export default function FooterLink({ arr, title }) {
  return (
    <div className='footer-link-main'>
        <h3>{title}</h3>
        <div className='footer-link-div'>
        {
            arr.map((item, index) => (
                <Link href={item.link} className='links' key={index}>{item.name}</Link>
            ))
        }
        </div>
    </div>
  )
}
