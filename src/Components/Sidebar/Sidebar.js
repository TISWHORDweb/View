import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/Context';
import './sidebar.css'
// import Logo from '../../img/Tranquil4.png'
import { Link } from 'react-router-dom'

function Sidebar() {

    const [noItem, setNoItem] = useState(false)

    const { updateData, data } = useContext(MyContext);

    const handleOpen = () => {
        updateData('open');
        setNoItem(true)
    };

    const handleClose = () => {
        updateData('close');
        setNoItem(false)
    };


    return (
        <div>
            <div class={`sidebar  ${data}`}>
                <div class="logo_details">
                    {/* <i class="bx bxl-audible icon"></i> */}
                    {/* <img src={Logo} alt="" className='icon' /> */}
                    <h4 className='white icon'>VIEW</h4>
                    {!noItem ? <i class="bx bx-menu" id="btn" onClick={handleOpen}></i> :
                        <i class="bx bx-menu-alt-right" id="btn" onClick={handleClose}></i>}
                </div>
                <ul class="nav-list navFlow p-0 ">
                    <Link to="/admin">
                        <li>
                            <span>
                                <i class="bx bx-grid-alt"></i>
                                <span class="link_name">Dashboard</span>
                            </span>
                            <span class="tooltip">Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/admin/user">
                        <li>
                            <span>
                                <i class='bx bxs-user-circle'></i>
                                <span class="link_name">Users</span>
                            </span>
                            <span class="tooltip">Users</span>
                        </li>
                    </Link>

                    <Link to="/admin/video">
                        <li>
                            <span>
                                <i class='bx bxs-videos'></i>
                                <span class="link_name">Videos</span>
                            </span>
                            <span class="tooltip">Videos</span>
                        </li>
                    </Link>
                    <Link to="/admin/talent">
                        <li>
                            <span>
                                <i class='bx bxs-microphone-alt'></i>
                                <span class="link_name">Talents</span>
                            </span>
                            <span class="tooltip">Talents</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar