"use client"

import React from 'react'
import Image from 'next/image'
import { conditions, elderly } from '../../../../public/imports'

export default function Conditions({ params }) {
    const id = params.condition
    const condition = conditions.find((p) => p.condition_id === id)

    const brief = "We offer inte"
    if (!condition) {
        return <div className='condition-notfound'>Query not found.</div>
    }

    return (
        <div className='condition-main'>
            <div className="condition-container">
                <div className='condition-image'>
                    <Image src={elderly} width={100} height={100} alt='condition-image' unoptimized={true} />
                    <div className="insert">
                        <div className="insert-text"><h1>{condition.brief_title}</h1></div>
                        <p>We don&apos;t believe in temporary relief—we focus on sustainable healing. Our therapy promotes long-term wellness by restoring balance, strengthening immunity, and enhancing your body&apos;s ability to heal itself.</p>
                    </div>
                </div>

                <div className="services">
                    <div className="services-container">
                        <div className="title">
                            <h4>{condition.condition_name} Services Offered at Langata Wellness Center</h4>
                        </div>
                        <div className="text">{condition.condition_services}</div>
                    </div>
                </div>

                <div className="description">
                    <h2>{condition.description_title}</h2>
                    <div className="description-text">{condition.condition_description}</div>
                </div>

                <div className="approach">
                    <h2>{condition.condition_question}</h2>
                    <div className="approach-text">{condition.condition_approach}</div>
                </div>

                <div className="condition-cta">
                    <div className="cta-container">
                        <div className='cta-image'>
                            <Image src={condition.condition_image} width={100} height={100} unoptimized={"true"} alt='cta-image' />
                        </div>

                        <div className='cta-description'>
                            <div className="cta-description-title">
                                <h2>Live Life To The Fullest!</h2>
                                <p>{condition.condition_title}</p>
                            </div>

                            <div className="cta-description-text">
                                <p>Schedule a consultation and get back to living life to the fullest. Call us today or pay us a visit.</p>
                                <button>BOOK A CONSULTATION</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
