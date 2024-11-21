import Image from 'next/image'
import React from 'react'
import { stock, wall1, wall2, wall3, wall4, wall5, wd1, wd2, wd3 } from '../../../public/imports'

export default function WorkDone() {
    return (
        <div className='work-main'>
            <div className="work-container">
                <h2>Work Done</h2>
                <div className="work-products" id='workdone'>
                    <div id='wd1'>
                        <Image src={wd1} width={100} height={100} alt='wallpaper' unoptimized={true} className='product-image' />
                        <h4>Wall makeover for Florida club, Nairobi CBD.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus laboriosam aliquam quod, quia sint vel.</p>
                    </div>


                    <div id='wd2'>
                        <Image src={wd2} width={100} height={100} alt='wall-panel' unoptimized={true} className='product-image' />
                        <h4>Wall makeover for Florida club, Nairobi CBD.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus laboriosam aliquam quod, quia sint vel.</p>
                    </div>

                    <div id='wd3'>
                        <Image src={wd3} width={100} height={100} alt='carpets' unoptimized={true} className='product-image' />
                        <h4>Wall makeover for Florida club, Nairobi CBD.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus laboriosam aliquam quod, quia sint vel.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
