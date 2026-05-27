import React from 'react';

const Guess = ({ setNum, num, guess, gameOver, start }) => {
    return (
        <div className=' p-10'>

            <div className='flex gap-1'>
                <button onClick={() => setNum(num - 1)} className='cursor-pointer  text-6xl bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded '>&lt;</button>
                <input className='border border-black rounded w-20 text-5xl px-2.5 py-2' type="number" value={num} onChange={(e) => { if (e.target.value > 99) { setNum(99) } else if (parseInt(e.target.value, 10) <= 0) { setNum(0) } else { setNum(e.target.value) } }} />
                <button onClick={() => setNum(num + 1)} className='cursor-pointer text-6xl bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded'>&gt;</button>
            </div>
            {gameOver ? <button className='border bg-green-800 px-10 py-2 rounded mt-4 cursor-pointer text-white hover:bg-green-700' onClick={start}>Start</button>
                : <button className='border bg-green-800 px-10 py-2 rounded mt-4 cursor-pointer text-white hover:bg-green-700' onClick={guess}>Guess</button>
            }
        </div>
    );
};

export default Guess;