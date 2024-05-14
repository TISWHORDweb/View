import React from 'react'

function Modal(props) {
    return (
        <div>
            <div className="PatientModal ">
                <button type="button" class={`btnNoBg ${props.class}`} data-bs-toggle="modal" data-bs-target={"#"+props.id}>
                    {props.title}
                </button>
                <div class="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog ">
                        <div class="modal-content">
                           {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal