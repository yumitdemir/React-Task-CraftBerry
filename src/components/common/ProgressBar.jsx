import React from 'react';

function ProgressBar({progress = 0}) {
    return (
        <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-600 rounded-[20px] ">
            <div className="h-2 bg-primary rounded-[20px] " style={{width: `${progress}%`}}></div>
        </div>);
}

export default ProgressBar;