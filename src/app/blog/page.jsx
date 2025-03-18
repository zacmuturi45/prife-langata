import React from 'react'
import BlogCards from '../components/blogCards'
import { blogArticles } from '../../../public/imports'

export default function Blog() {
    return (
        <div className='blog-main'>
            <div className="blog-container">
                <div className="blog-box">
                    <h1>Blog Archive</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, possimus deserunt natus vel dolores labore tempora voluptates distinctio nisi dicta ipsa. Ullam dicta sunt fuga laboriosam dolorum quae debitis, enim ut consequuntur corporis excepturi commodi. Aspernatur reprehenderit eius odit explicabo quod similique corporis voluptas velit perferendis! Quo ipsa unde iusto!</p>
                </div>

                <div className="blog-articles">
                    {
                        blogArticles.map((item, index) => (
                            <BlogCards image={item.image} author={item.author} content={item.content.intro.slice(0, 150)} title={item.title} index={index} date={item.date} id={item.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
