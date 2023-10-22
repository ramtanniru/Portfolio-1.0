import React from 'react'
import Btn from './btn'

const C2 = ({img,head,bio,content,link}) => {
    const visit = ()=>{
        window.location.href = link;
    }
  return (
    <div className='my-5 col-10 col-sm-3' onClick={visit}>
        <div className='text-start card shadow rounded-3 border-0 p-4'>
            <img src={img} className='rounded-2 hover-zoom bg-image'/>
            <div className='my-3'>
                <h6 className='text-danger'>
                    {head}
                </h6>
                <h6 className='text-dark fw-normal'>
                    {bio}
                </h6>
                <p className='fw-light'>
                    {content}
                </p>
                <Btn type="light" content="View Case Studies"/>
            </div>
        </div>
        <div className='z-0 position-absolute border-1 border-danger'></div>
    </div>
  )
}

export default C2;