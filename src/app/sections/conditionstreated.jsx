import React from 'react'
import { blfam, blfam2, blfam3, blfam4 } from '../../../public/imports'
import Conditions from '../components/conditions'

export default function ConditionsTreated() {
    const conditionsArray = [
        { image: blfam, text: "Autoimmune Disorders" },
        { image: blfam2, text: "Peripheral Neuropathy" },
        { image: blfam3, text: "Chronic Pain" },
        { image: blfam4, text: "Cancer Support" },
        { image: blfam, text: "Diabetes Support" },
        { image: blfam2, text: "Reproductive health" }
    ]
    return (
        <div className='conditions-main' id='conditionsWeTreat'>
            <div className="conditions-container">
                <div className='textdiv'>
                    <h2>Focused Wellness Areas</h2>
                    <p>Targeted therapies for holistic healing</p>
                </div>

                <div className='imagediv'>
                    {
                        conditionsArray.map((item, index) => (
                            <Conditions image={item.image} text={item.text} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
