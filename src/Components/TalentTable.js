import React, { useEffect, useRef, useState } from 'react'
import { TimeConverter } from '../Utils/Core'
// import { Link } from 'react-router-dom'
import ViewTalent from '../Pages/Admin/ViewTalent'

function TalentTable({ talent }) {
    const [talents, setTalents] = useState([])
    const [id, setId] = useState([])

    useEffect(() => {
        setTalents(talent)
    }, [talent])
    const ref = useRef()
    const GetId =(id)=>{
        setId(id)
        console.log("in")
        ref.current.click()
    }

    return (
        <div>
             <div class="modal fade" id="viewTalentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body p-5">
                            <ViewTalent id={id}/>
                        </div>
                    </div>
                </div>
            </div>
            <button data-bs-toggle="modal" data-bs-target="#viewTalentModal" ref={ref} style={{display:"none"}}></button>
            <div className="Table mt-4"> 
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Talent</th>
                            <th scope="col">Age</th>
                            <th scope="col">Date & Time Added</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {talents ?
                            <>
                                {talents.map((each, i) => (
                                    <tr>
                                        <th scope="row">{i}</th>
                                        <td>{each.user.name}</td>
                                        <td>{each.name}</td>
                                        <td>{each.age}</td>
                                        <td>{TimeConverter(each.createdAt)}</td>
                                        <td className='' onClick={()=>GetId(each.tid)}>
                                            {/* <Link to={`/admin/talent/view/${each.tid}`}> */}
                                                <span className='black'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    </svg>
                                                </span>
                                            {/* </Link> */}
                                        </td>
                                    </tr>
                                ))}
                            </> :
                            <div className="">
                                <center>Loading, please wait......</center>
                            </div>
                        }
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