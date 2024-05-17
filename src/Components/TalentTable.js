import React from 'react'
import Icon from '../Assets/image/male.png'
import Modal from './Modal'

function TalentTable() {
    return (
        <div>
            <div class="modal fade" id="talentTableieModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body AlertModal p-5">
                            <div className=' '>
                                <section class="view">
                                    <div class=" ">
                                        <center className='mb-4'>
                                            <img src={Icon} className='w-20' alt="" />
                                        </center>
                                        <div>
                                            <div className="each">
                                                <p className='sub'>Name :</p>
                                                <p className='value'>Emmy</p>
                                            </div>
                                            <div className="each">
                                                <p className='sub'>Email:</p>
                                                <p className='value'>091782872y39</p>
                                            </div>
                                            <div className="each">
                                                <p className='sub'>Date Created :</p>
                                                <p className='value'>22-03-2023</p>
                                            </div>
                                            <h6>Social handles</h6>
                                            <div className="each">
                                                <p className='sub'>Facebook :</p>
                                                <p className='value'>Emmy</p>
                                            </div>
                                            <div className="each">
                                                <p className='sub'>Tiktok :</p>
                                                <p className='value'>Emmy</p>
                                            </div>
                                            <div className="each">
                                                <p className='sub'>Youtube :</p>
                                                <p className='value'>Emmy</p>
                                            </div>
                                            <div className="each">
                                                <p className='sub'>Twitter :</p>
                                                <p className='value'>Emmy</p>
                                            </div>
                                            <div className="each">
                                                <p className='sub'>Snapchat :</p>
                                                <p className='value'>Emmy</p>
                                            </div>
                                        </div>
                                        <div className="down">
                                            <center><div className="buttons mt-3">
                                                <button className='btnNoBg2' data-bs-toggle="modal" data-bs-target="#deleteModal" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                                </svg></button>
                                            </div></center>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Table mt-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Date & Time Added</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">ZP-139318</th>
                            <td>Batimehin Emmanuel</td>
                            <td>ebatimehin@gmail.com</td>
                            <td>Male</td>
                            <td>08/04/202</td>
                            <td className='' data-bs-toggle="modal" data-bs-target="#talentTableieModal">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="down">
                    <div className=""></div>
                    <div className="down">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <span class="page-link" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </span>
                                </li>
                                <li class="page-item"><span class="page-link"  >1</span></li>
                                <li class="page-item"><span class="page-link"  >2</span></li>
                                <li class="page-item"><span class="page-link"  >3</span></li>
                                <li class="page-item">
                                    <span class="page-link" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalentTable