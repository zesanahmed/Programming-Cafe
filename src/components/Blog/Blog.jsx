import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    console.log(props)
    const { name, title, date, img, img_1, readingTime
    } = props.blog;


    return (
        <div className='my-12 lg:px-8'>
            <div >
                <img className='rounded-lg' src={img} alt="" />
                <div className=' flex mt-6'>
                    <div className='basis-3/4 flex gap-4'>
                        <img className="w-20 rounded-full" src={img_1} alt="" />
                        <div>
                            <h3 className='font-bold'>{name}</h3>
                            <p className='text-slate-500'>{date}</p>
                        </div>
                    </div>
                    <div className='basis-1/4 flex gap-3'>
                        <p className=''>{readingTime}</p>
                        <div>
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                    </div>
                </div>
                <h2 className='text-3xl font-bold my-4'>{title}</h2>
                <a onClick={props.countTime} className='link btn-link'>Mark as read</a>
            </div>
        </div>
    );
};

export default Blog;