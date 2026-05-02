import React from 'react';

const BackgroundBlobs = React.memo(() => {
    return (
        <>
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
        </>
    );
});

BackgroundBlobs.displayName = 'BackgroundBlobs';

export default BackgroundBlobs;
