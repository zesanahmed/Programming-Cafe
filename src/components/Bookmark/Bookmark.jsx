import React from 'react';

const Bookmark = () => {
    return (
        <div>
            <div className='mt-8  mb-6'>
                <div className="border-2 border-indigo-600 bg-indigo-100 p-3 text-center rounded-md text-2xl font-bold">Spent time on read:{ } min</div>
            </div>
            <div className='px-6 py-4 bg-slate-200 rounded-md'>
                <h2 className='text-2xl font-bold'>Bookmarked Blogs : { } </h2>
                <div id='bookmarked-container' >

                </div>
            </div>
        </div>
    );
};

export default Bookmark;