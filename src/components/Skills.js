import React from 'react';
import CPB from './CPB';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
    const skills = {'UI/UX Design':70,"Web Design":85,"Web Development":60,"App Development":56};
    return (
        <div className='d-flex flex-wrap gap-5 justify-content-center mb-5 pb-5'>
            {Object.keys(skills).map(skill => (
                <CPB content={skill} percentage={skills[skill]} key={skill} />
            ))}
        </div>
    );
}

export default Skills;
