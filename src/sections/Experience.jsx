import React from 'react'
import PageTitle from '../shared/PageTitle'
import ExperienceRow from '../components/ExperienceRow'

import experienceList from '../data/experienceList'

function Experience() {

    // const experienceList 

    return (
        <div className='my-16'>
            <PageTitle pageTitle='Experience' />
            <ul>
                {experienceList.length > 0 && experienceList.map((exp, i) => (
                    <li key={i}>
                        <ExperienceRow singleExperience={exp} />
                        {/* {exp} */}

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience