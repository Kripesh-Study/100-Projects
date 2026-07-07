import React from 'react';

const MarkdownInput = ({setMdInput}) => {
  return (
    <div className=''>
      <textarea onChange={(e)=>setMdInput(e.target.value)} className='h-full border p-3' name="" rows={20} cols={50}></textarea>
    </div>
  );
};

export default MarkdownInput;