import React,{use} from 'react';
import Context from './Context';


const Categories = ({emojies}) => {




  const categories = [...new Set(emojies.map(e=> e.group ))]

  return (
    categories.map(e=>(
    <div className='my-10'>
      <h2 className='text-black/70 mb-5'>{e.toUpperCase()}</h2>
      <div className='flex gap-5 bg-gray-50 p-5 flex-wrap'>
        {emojies.filter(item=> item.group == e).map(elem=>(
          <div>{elem.emoji}</div>
        ))}
      </div>
    </div>

    )) 
  );
};

export default Categories;