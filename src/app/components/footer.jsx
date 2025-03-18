import Image from 'next/image'
import React from 'react'
import { arr1, arr2, arr3, cwhite, facebook, insta, tiktok } from '../../../public/imports'
import FooterLink from './footerlink'
import Link from 'next/link'

export default function Footer() {

  return (
    <div className='footer-main'>
      <div className="footer-items">


        <div className='items-div1'>
          <div className="swift-div">
            {/* <Image src={globe} width={35} height={35} alt='swift-logo' className='swift-logo' /> */}
            <p>LANGATA WELLNESS CENTRE</p>
          </div>
          <p>Where wellness meets cutting-edge technology, our clinic empowers the body&apos;s natural ability to heal itself. Through terahertz therapy—a revolutionary treatment that enhances cellular balance—and our research-backed supplements, we provide holistic support for optimal health. Our solutions work with your body, not against it, promoting natural, lasting wellness from within.</p>
            <Link href={"/shop"} style={{textDecoration: "none"}}><button>Shop</button></Link>
        </div>

        <div className="items-div">
          <div className='items-div2'>
            <FooterLink arr={arr2} title="Socials" />
          </div>

          <div className='items-div3'>
            <FooterLink arr={arr1} title="Main page" />
          </div>

          <div className='items-div4'>
            <FooterLink arr={arr3} title="Contacts" />
          </div>
        </div>

      </div>
      <div className="footer-social">

        <div className='social-div1'>
          <Image src={cwhite} width={15} height={15} className='cwhite' />
          <p>Copyright 2025 Langata Wellness Centre</p>
        </div>

        <div className="social-svg">
          <Image src={insta} width={20} height={20} alt='insta-svg' />
          <Image src={tiktok} width={20} height={20} alt='insta-svg' style={{ marginTop: ".2rem" }} />
          <Image src={facebook} width={20} height={20} alt='insta-svg' />
        </div>

        <div className='social-div2'>
          <Link href="/terms" className='links'><p>Terms of Use</p></Link>
          <p>|</p>
          <Link href="/terms" className='links'><p>Privacy Policy</p></Link>
        </div>

      </div>
    </div>
  )
}
