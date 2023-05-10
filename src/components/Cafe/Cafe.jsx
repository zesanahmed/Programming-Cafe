import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Blog from '../Blog/Blog';

const Cafe = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-8">
                <div className="col-span-2">
                    <Blog></Blog>
                </div>
                <div className="col-span-1">
                    <Bookmark></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Cafe;