import React, { useState,use } from 'react';
import Context from './Context';

const Recent = () => {

    const {recentlyUsed} = use(Context)
    // const [isRecent,setIsRecent] = useState(false)
    return (
        <div className=''>

            <h2 className='text-black/70'>RECENTLY USED</h2>
            {
            recentlyUsed.length >= 1 ?(<div className='flex gap-5'>
                {recentlyUsed.map(e=>(
                    <div>{e.emoji}</div>
                ))}
            </div>):(<div className='text-sm p-2 text-black/60'>No Recently Used...</div>)
        }
            
        </div>
    );
};

export default Recent;