import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Blog from '../Blog/Blog';


const Cafe = () => {

    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        fetch('info.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);


    const [time, setTime] = useState(0);
    const countTime = () => setTime((time) => time + 5);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-8">
                <div className="col-span-2">
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                            countTime={countTime}>
                        </Blog>)
                    }
                </div>
                <div className="col-span-1">
                    <Bookmark time={time}></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Cafe;