import React from 'react';

const Laps = ({ laps }) => {
    return (
        <div className=' bg-gray-900 max-w-110 w-full text-center relative text-white rounded-xl'>
            <div className='flex justify-between items-center border-b border-gray-800 px-5 py-3'>
                <h2 className='text-xl text-gray-400'>Lap History</h2>
                <div className='w-10  h-10 rounded-full grid place-items-center  bg-yellow-400/40  text-yellow-400'>{laps.length}</div>
            </div>
            <div className='flex flex-col gap-2.5 px-5 py-4 overflow-scroll h-65 '>
                {laps.length > 0 && laps.map((e, i) => (
                    <div key={i} className=' flex justify-between '>
                        <span className='text-gray-400'>#{i+1}</span>
                        <span>{e?.lapTime?.hour}:{e?.lapTime?.min}:{e?.lapTime?.sec}.{e.lapTime.millisec}</span>
                        <span className='text-gray-400'>{e.currentTime.hour}:{e.currentTime.min}:{e.currentTime.sec}.{e.currentTime.millisec}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Laps;