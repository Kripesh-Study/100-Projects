import React from 'react';
// import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import MarkdownPreview from '@uiw/react-markdown-preview';



const Output = ({mdInput}) => {
  

  return (
    <div className='border felx-3'>
       {/* <Markdown remarkPlugins={[remarkGfm]}>{mdInput}</Markdown> */}
        <MarkdownPreview source={mdInput} style={{ padding: 16,backgroundColor:"white",color:"black" }} />
    </div>
  );
};

export default Output;