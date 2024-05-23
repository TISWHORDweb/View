import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/Context';


function Nav() {

    const [width, setWidth] = useState('')
    const [cardWidth, setCardWidth] = useState(0);

    const { data } = useContext(MyContext);
    
    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (data === '') {
            const calculatedWidth = screenWidth - 78;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        } else if (data === 'open') {
            const calculatedWidth = screenWidth - 250;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        }

        if (data === 'close') {
            const calculatedWidth = screenWidth - 78;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        }

    }, [cardWidth, data])

    window.onload = function () {
        const screenWidth = window.innerWidth;

        if (data === '') {
            const calculatedWidth = screenWidth - 78;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        } else if (data === 'open') {
            const calculatedWidth = screenWidth - 250;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        }

        if (data === 'close') {
            const calculatedWidth = screenWidth - 78;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        }
    }
    return (
        <div>
            <div className="nav" id="nav" style={{ width: width }}>
                {/* <div className="">
                </div>
                <div className="right">
                    <ul>
                    </ul>
                </div> */}
            </div>

            <div className="">
                <nav class="navbar navbar-expand-lg navbarDisplay">
                    <div class="container-fluid">
                        <a class="navbar-brand nan" href="/"><h4>SBTV</h4></a>
                        <button class="btn Nav-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="bx bx-menu" id="btn" ></i></button>

                        <div class="offcanvas offcanvas-start w-300" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">SBTV</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="m-0 p-0">
                                    <li class="">
                                        <div className="">
                                            <i class="bx bx-grid-alt"></i>
                                            <span class="link_name">Dashboard</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bxs-user-circle'></i>
                                            <span class="link_name">Users</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bxs-videos'></i>
                                            <span class="link_name">Videos</span>
                                        </div>
                                    </li>
                                    <li class="">
                                        <div className="">
                                            <i class='bx bxs-microphone-alt'></i>
                                            <span class="link_name">Talents</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav