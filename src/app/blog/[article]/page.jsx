import React from 'react'
import { blogArticles } from '../../../../public/imports'
import Image from 'next/image'


export default function Article({ params }) {
    const id = params.article
    const art = blogArticles.find((item) => item.id === id)

    if (!art) {
        return <div style={{ minHeight: "100vh", color: "black" }}>Query not found</div>
    }

    return (
        <div className='art-main'>
            <div className="art-container">
                <div className="art-block">
                    <h1>{art.title}</h1>
                    <p>{art.date}</p>
                </div>

                <div className="art-content">
                    <div className="blog-img">
                        <Image src={art.image} width={100} height={100} alt='blog-image' unoptimized={"true"} />
                    </div>
                    <div className="art-content-content">
                        <h2>{art.content.title}</h2>
                        <p>{art.content.intro}</p>
                        <h3>{art.content.sub_title}</h3>
                        <>
                        <ol>
                            {art.content.sub_title_content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                        </>
                        <h3>{art.content.sub_title2}</h3>
                        <>
                        <ol>
                            {art.content.sub_title2_content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}
