import React from 'react'
import { Link } from 'react-router-dom'

function Live() {
    return (
        <div>
            <div className="ban mb-5">
                <div className="Banner">
                    <div className="text mb-4 pt-5">
                        <h2 className='animate__animated animate__fadeInDown'> <span className='primary'>SBTV</span> LIVE TV</h2>
                        <h5 className='white'>Step into a world of entertainment! Dive into our live TV selection filled with must-watch shows and thrilling events. Ready to embark on the ultimate viewing journey? Click below to join live now!</h5>
                        <div className="btns animate__animated animate__bounce">
                            <Link to="/app/video/stream">
                                <button class="bn632-hover bn21 m-0" type="">JOIN LIVE NOW <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Live