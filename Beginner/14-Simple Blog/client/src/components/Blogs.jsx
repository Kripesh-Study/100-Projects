import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="p-10 text-center text-gray-500">No blogs found or loading...</div>;
  }

  return (

    <div className='grid grid-cols-3 gap-5 p-10'>
      {data.map((e,i)=> (
        <div key={i} className='bg-white p-5 rounded '>
          <img src={e?.image} alt="" />

          <div className='grid gap-4 mt-5'>
            <h3 className='font-bold'>{e?.title}</h3>
            <p className='text-gray-600'>{e?.content}</p>
          </div>
          <Link to={"/"+e?._id} className='w-full block text-center p-2 bg-blue-300 cursor-pointer'>Read More...</Link>
        </div>

      ))}
    </div>
  );
};

export default Blogs;