import React from 'react';

const Answer = () => {
    return (
        <div className='grid lg:grid-cols-2 m-12 gap-6'>
            <div className='p-4 bg-violet-400 rounded-lg'>
                <h4 className='font-bold mb-2'>Props vs State</h4>
                <p>1. Props use for the pass dedicated data from parent Component to children component. And this data can be utilize in the children component.</p>
                <p>2. State mainly use for manage data which can be change with the purpose. It change with the purpose of component</p>
            </div>
            <div className='p-4 bg-violet-400 rounded-lg'>
                <h4 className='font-bold mb-2'>How does useState work?</h4>
                <p>useState is a hook in react project which is using for the manage state. When state need to change useState hook work for that and state value set on a function.</p>
            </div>
            <div className='p-4 bg-violet-400 rounded-lg'>
                <h4 className='font-bold mb-2'>Purpose of useEffect other than fetching data.</h4>
                <p>Their are various purpose of the useEffect. It also a hook in react project. Firstly it can fetch data from database. useEffect can be use for update a file. It also make to possible eventListener or animated.</p>
            </div>
            <div className='p-4 bg-violet-400 rounded-lg'>
                <h4 className='font-bold mb-2'>How Does React work?</h4>
                <p>React is a javascript library for developer. It may create a nice process to develop a javascript project. This is component based library. Its provided virtual dom and it is connected to reconlliation algorithm or diff algorithm.</p>
            </div>
        </div>
    );
};

export default Answer;

