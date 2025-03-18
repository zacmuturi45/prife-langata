import Image from 'next/image'
import React from 'react'
import { blfam3, blfam4, poly } from '../../../public/imports'

export default function CommonQuestions() {
    return (
        <div className='common-main'>
            <div className="common-container">
                <h2>My First Consultation - What to expect</h2>

                <div>
                    <h3>What happens during my first consultation?</h3>
                    <p>During your first visit, we conduct a full body analysis to detect deficiencies and imbalances in your body. We also review any pre-existing medical conditions from prior consultations, such as diabetes, hypertension, or cancer, to tailor our approach accordingly. Our goal is to gain a complete picture of your health so that we can recommend the most effective treatment plan for your specific needs.</p>
                </div>

                <div>
                    <h3>How do you determine the right treatment for me?</h3>
                    <p>From our assessment combined with your medical history, we identify the areas of your body that need support. If you have an existing diagnosis, we proceed directly to the relevant treatment protocol. For new clients, we analyze our assessment to suggest the best course of action. This may include Terahertz therapy sessions and additional wellness products designed to enhance your body&apos;s healing process. Each recommendation is carefully customized to ensure optimal results.</p>
                </div>

                <div>
                    <h3>How many Terahertz therapy sessions will I need?</h3>
                    <p>The number of sessions varies depending on your condition and health goals. Some clients experience noticeable improvements within a few sessions, while others may require a longer treatment plan. For those with chronic illnesses, we provide structured guidance on session frequency and complementary wellness products to maximize benefits. Our team will work closely with you to adjust your therapy plan as needed, ensuring a personalized approach to your healing journey.</p>
                </div>
            </div>
            <div id="banner2">
                <div className="imagediv">
                    {/* <Image src={blfam4} unoptimized width={100} height={100} alt='polygon-background' className='poly' /> */}
                    <div className="poly"></div>
                </div>
                <div className="textdiv">
                    <p>Get back to enjoying life&apos;s moments, healthy, happy, as you should!</p>
                </div>
            </div>
        </div>
    )
}
