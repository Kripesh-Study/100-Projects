import React, { useState } from 'react';
import  './passwordRequirements.css'

const PasswordRequirements = ({rangeNumber,setRangeNumber,setCharsUsed,charsUsed}) => {
    
  return (
    <div className='w-full grid gap-8'>
        <label className='w-full flex gap-10 justify-between'>
            <div>Password Length {rangeNumber}</div>
            <input
                className='w-[60%] cursor-pointer'
                type="range"
                min={1}
                max={50}
                value={rangeNumber}
                onChange={(e) => setRangeNumber(parseInt(e.target.value, 10))}
            />
        </label>
        <div className='flex justify-between w-full'>
            <div>Characters Used</div>
            <div className='flex gap-4.5'>
                <label>
                    <input
                        type="checkbox"
                        // checked={!!charsUsed.lowerCase}
                        onChange={(e) => setCharsUsed(prev => ({ ...prev, lowerCase: e.target.checked }))}
                    /> LowerCase
                </label>
                <label>
                    <input
                        type="checkbox"
                        // checked={!!charsUsed.upperCase}
                        onChange={(e) => setCharsUsed(prev => ({ ...prev, upperCase: e.target.checked }))}
                    /> UpperCase
                </label>
                <label>
                    <input
                        type="checkbox"
                        // checked={!!charsUsed.number}
                        onChange={(e) => setCharsUsed(prev => ({ ...prev, number: e.target.checked }))}
                    /> Number
                </label>
                <label>
                    <input
                        type="checkbox"
                        // checked={!!charsUsed.symbol}
                        onChange={(e) => setCharsUsed(prev => ({ ...prev, symbol: e.target.checked }))}
                    /> Symbol
                </label>
            </div>
        </div>
    </div>
  );
};

export default PasswordRequirements;