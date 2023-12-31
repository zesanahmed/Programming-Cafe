import React from 'react';

const Bookmark = (props) => {
    console.log(props)

    return (
        <div>
            <div className='mt-8  mb-6'>
                <div className="border-2 border-indigo-600 bg-indigo-200 p-3 text-center rounded-md text-2xl font-bold">Spent time on read:{props.time} min</div>
            </div>

            <div className='px-6 py-4 bg-slate-200 rounded-md'>
                <h2 className='text-2xl font-bold'>Bookmarked Blogs : { } </h2>

                <div id='bookmarked-container' className='px-6 py-4 bg-slate-200 rounded-md font-bold text-xl mt-2' >
                    <h4>{props.title}</h4>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;