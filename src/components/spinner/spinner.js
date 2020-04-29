import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner d-flex flex-column h-100 align-items-center justify-content-center">
            <div className="spinner-grow text-secondary"></div>
            <span className="mt-2">Loading...</span>
        </div>
    )
}

export default Spinner;