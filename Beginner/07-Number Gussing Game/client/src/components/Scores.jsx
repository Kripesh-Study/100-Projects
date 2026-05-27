import React from 'react';

const Scores = ({score,bestScore}) => {
    return (
        <div className='absolute top-18 right-8 text-start'>
            <h3>Score:{score}</h3>
            <h3>Best Score:{bestScore}</h3>
        </div>
    );
};

export default Scores;