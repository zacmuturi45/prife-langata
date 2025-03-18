import Image from 'next/image'
import React from 'react'
import { mapshot } from '../../../public/imports'

export default function Map() {
    return (
        <div className='map-main'>
            <div className="map-container">
                <div className='map-box'>
                    <Image src={mapshot} width={100} height={100} unoptimized alt='map-image' style={{ width: "100%", height: "100%" }} />
                </div>

                <div className='map-info'>
                    <div className="map-info-container">
                        <h2>Lang'ata Wellness Gallery</h2>
                        <p className='address'>NHC Court Mall Lang'ata<br />Shop 8</p>
                        <div className='open-time'>
                            <h5>Hours of Operation:</h5>
                            <p>Monday - Friday: <span>8:00 AM - 6:00 PM</span></p>
                            <p>Saturday: <span>8:00 AM - 4:00 PM</span></p>
                            <p>Sundays & Public Holidays: <span>Closed</span></p>
                        </div>
                        <div className="map-buttondiv">
                            <button>
                                <a href='tel:254707486258' style={{ textDecoration: "none", color: "white" }}>
                                    REQUEST CONSULTATION
                                </a>
                            </button>
                            <button id='nav-button2'>
                                <a href='tel:254707486258' style={{ textDecoration: "none", color: "black" }}>
                                    BOOK SESSION
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
