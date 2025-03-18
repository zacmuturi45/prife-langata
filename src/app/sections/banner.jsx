import Image from 'next/image'
import React from 'react'
import { arrow, blfam, blfam3, it1 } from '../../../public/imports'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className='banner-main'>
      <div className="banner-container">
        <div className='imagediv'>
          <Image src={it1} width={100} height={100} alt='family-photo' unoptimized style={{ width: "100%", height: "100%" }} />
        </div>

        <div className='textdiv'>
          <h3>Discover the Power of Terahertz Therapy</h3>
          <p>Imagine a therapy that works at the cellular level to boost energy, circulation and accelerate your body&apos;s healing abilities. Terahertz technology bridges science and wellness to help your body heal itself naturally.</p>
          <p>100% Drug-Free, 100% non-invasive, 100% safe and natural. Unlock a new era of health and vitality today!</p>

          <Link href={"/terahertz"}>
            <div className='cta-button'>
              <div className="abs-div"></div>
              <div className="abs-div1"></div>
              <div className='arrow-div'>
                <Image src={arrow} width={25} height={25} alt='arrowRight' className='arrowRight' />
                <span>Learn more</span>
                <Image src={arrow} width={25} height={25} alt='arrowRight' className='arrowRight' />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}
