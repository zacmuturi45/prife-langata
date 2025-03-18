import Image from 'next/image'
import React from 'react'
import { blfam, blfam2, stock } from '../../../public/imports'

export default function About() {
    return (
        <div className='about-main' id='about'>
            <div className="about-container">
                <div className='images-div'>
                    <div className='img'>
                        <Image src={blfam} width={100} height={100} alt='about-image' unoptimized style={{ width: "100%", height: "100%" }} />
                    </div>

                    <div className='img'>
                        <Image src={blfam2} width={100} height={100} alt='about-image' unoptimized style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>

                <div className='textdiv'>
                    <h2>About Langata Wellness Centre</h2>
                    <p>At Langata Wellness Centre, we are dedicated to offering a drug free, 100% natural, non-invasive approach to health. We are a premier Terahertz therapy centre focused on targeting the root causes of chronic conditions. Our goal is to support your body&apos;s natural ability to heal, restore balance, and achieve optimal health. By combining advanced technology with holistic wellness products, we create personalized solutions designed to deal with chronic conditions.</p>
                    <p>We are passionate about helping you take control of your health in a natural, sustainable way. Whether you are dealing with arthritis, cancer, diabetes, hypertension or simply seeking to improve your energy and achieve optimum health, our services are designed to provide long-lasting benefits. We believe that true wellness goes beyond just managing symptoms—it&apos;s about nurturing your body&apos;s inherent healing capabilities to restore health from within.</p>
                    <p>Langata Wellness Centre takes pride in creating a welcoming, comfortable environment where you can experience healing that is safe, effective, and tailored to your needs. With our integrative approach, we aim to empower you to live your healthiest, most vibrant life.</p>
                    <button>
                        <a href='tel:254707486258' style={{ textDecoration: "none", color: "white" }}>
                            Request consultation
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
