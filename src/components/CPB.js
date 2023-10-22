import React from 'react'
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const CPB = ({content,percentage}) => {
  return (
    <div className='card shadow border-0 m-3 p-3' style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} 
        styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'round',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `#F22225`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#EBEBEB',
          })}/>
        <p className='fw-bold mt-2'>{content}</p>
    </div>
  )
}

export default CPB;