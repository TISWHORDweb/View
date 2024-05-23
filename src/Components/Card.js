import React from 'react'
import { DateConverter } from '../Utils/Core';

function Card({insight}) {

    return (
        <div>
            {insight ?
                <div className="Card">
                    <div className="cards mb-4">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="set">
                                    <div className="opt1">
                                        <p className='m-0'>USER</p>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg></span>
                                    </div>
                                    <center>
                                        <div className="due mt-4" >
                                            <h1 className='m-0'>{insight.users.AllUser}</h1>
                                        </div>
                                        <div className="down mt-3">
                                            <p>Date Created Last: <b>{DateConverter(insight.users.date)}</b></p>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="set">
                                    <div className="opt1">
                                        <p className='m-0'>VIDEO</p>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg></span>
                                    </div>
                                    <center>
                                        <div className="task mt-4">
                                            <h1 className='m-0'>{insight.videos.AllVideo}</h1>
                                        </div>
                                        <div className="down mt-3">
                                            <p>Date Created Last: <b>{DateConverter(insight.videos.date)}</b></p>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="set">
                                    <div className="opt1">
                                        <p className='m-0'>TALENT</p>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg></span>
                                    </div>
                                    <center>
                                        <div className="open mt-4">
                                            <h1 className='m-0'>{insight.talents.AllTalent}</h1>
                                        </div>
                                        <div className="down mt-3">
                                            <p>Date Created Last: <b>{DateConverter(insight.talents.date)}</b></p>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="">
                    <center>Loading, please wait......</center>
                </div>}
        </div>
    )
}

export default Card