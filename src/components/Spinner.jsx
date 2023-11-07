import React from 'react';

const Spinner = ({theme = 'info'}) => {
    return (
        <div className='spinner-wrapper'>
            <div className={`spinner-border text-${theme} me-3`}></div>
        </div>
    );
};

export default Spinner;