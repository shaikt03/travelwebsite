import React from 'react'
import SendEnquiry from './SendEnquiry'

const Contact = () => {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-lg-6'>
            <div className='shadow p-5'>
              <SendEnquiry/>
            </div>
        </div>
        <div className='col-lg-6'>
          <div className='shadow p-5 h-100'>
            <p><i className="bi bi-telephone-forward"></i> +91 9182774171</p>
            <p><i className="bi bi-envelope-at"></i> shaiktalib45@gmail.com</p>
            <p><i className="bi bi-geo-fill"></i> Rangareddy, Hyderabad, Telangana</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact