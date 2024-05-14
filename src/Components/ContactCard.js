import React from 'react'

function ContactCard() {
  return (
    <div>
        <div className="container">
            <div className="ContactCard mt-5 mb-5">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className='secondary'> Still Need Help?</h4>
                        <p>Can't find the answer here?  Message us for help!</p>
                    </div>
                    <div className="col-md-4">
                        <button className='bn13'>Shoot Us A Message!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCard