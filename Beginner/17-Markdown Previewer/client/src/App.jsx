import React, { useState } from 'react';
import MarkdownInput from './components/MarkdownInput';
import Output from './components/Output';


const App = () => {
  const [mdInput,setMdInput] = useState("")
  return (
    <div className='grid grid-cols-2 gap-5 h-[80vh]'>
      <MarkdownInput setMdInput={setMdInput} />
      <Output mdInput={mdInput} />
    </div>
  );
};

export default App;