import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='clinic-main'>
      <div className="clinic-container">
        <div className='imagediv'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TSnPQ66xZRQ?si=H6ciM79O7FjJk7Vq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='clinic-video'></iframe>
        </div>

        <div className='textdiv'>
          <h3>Learn more about Terahertz Therapy</h3>
          <p>We provide the best pain management solutions through cutting edge technology and natural products, allowing our clients to experience freedom from pain and achieve the optimum health that they deserve.</p>
          <p>100% Drug-Free, 100% non-invasive, 100% safe and natural.</p>
          <button>
            <a href='tel:254707486258' style={{ textDecoration: "none", color: "black" }}>
              Book consultation
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
