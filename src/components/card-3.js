import React from 'react'

const C3 = ({title,t,img,link}) => {
  const visit = ()=> {
    window.location.href = link;
  }
  return (
    <div className='card shadow border-0 p-3 mb-3 col-12 col-sm-3' onClick={visit}>
        <h6 className='fw-bold'>{title}</h6>
        <p className='fw-light'>{t}</p>
        <img src={img}/>
    </div>
  )
}

export default C3;