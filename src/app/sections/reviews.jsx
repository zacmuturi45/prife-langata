import React from 'react'
import Review from '../components/review'

export default function Reviews() {
    const reviewArray = [
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni illo quisquam eum? Rerum fuga accusantium minus veniam voluptatibus quidem!", name: "Rashad Otieno" },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni illo quisquam eum? Rerum fuga accusantium minus veniam voluptatibus quidem!", name: "Suzanna Wanjiru" },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni illo quisquam eum? Rerum fuga accusantium minus veniam voluptatibus quidem!", name: "Oliver Shikhanda" }
    ]
    return (
        <div className='main-reviews'>
            <div className="reviews-container">
                <h2>What our clients say</h2>
                <div className="reviews">
                    {
                        reviewArray.map((item, index) => (
                            <Review text={item.text} index={index} name={item.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
