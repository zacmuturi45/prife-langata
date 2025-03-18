import React from 'react'
import Image from 'next/image';
import { art_water, blfam, blfam2, blfam3, blfam4, detox, exercise, nutrition, sleep, stress } from '../../../public/imports';
import BlogCard from '../components/blogCard';

export default function Article() {
    const cardArray = [
        {image: art_water, date: "March 17, 2025", category: "Wellness", title: "The Science Behind Oxygenated Water: How It Boosts Your Health", time: "5 Minute", id: "ig3"},
        {image: nutrition, date: "March 10, 2025", category: "Wellness", title: "The Connection between Oxygen and Mental Clarity", time: "7 Minute", id: "ig4"},
        {image: detox, date: "March 7, 2025", category: "Detox", title: "Detox and Rejuvenate: How to Naturally Cleanse Your Body", time: "7 Minute", id: "ig5"},
        {image: stress, date: "March 16, 2025", category: "Wellness", title: "Simple Ways to Reduce Stress and Improve Your Well-being", time: "7 Minute", id: "ig6"},
    ]
  return (
    <div className='article-main'>
        <div className="article-container">
            <div className="article-text">
                <div>
                    <h2>Your Path to a Healthier You</h2>
                    <p>Curated advice for mind, body and beyond.</p>
                </div>
                <div className='article-button'>
                    {/* <Image src={arrowRight} width={25} height={25} alt='arrow-rights' /> */}
                    <button>View more</button>
                </div>
            </div>

            <div className="blog-cards">
                {
                    cardArray.map((item, index) => (
                        <BlogCard image={item.image} date={item.date} category={item.category} title={item.title} time={item.time} key={index} id={item.id} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
