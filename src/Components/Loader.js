import React from 'react'

function Loader() {
    return (
        <div className="loadWrapper">
            <div className=''>
                <div className="loader">
                    <div class="spinner-grow text-dark loaderHeightWeight" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-dark loaderHeightWeight" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-dark loaderHeightWeight" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-dark loaderHeightWeight" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader