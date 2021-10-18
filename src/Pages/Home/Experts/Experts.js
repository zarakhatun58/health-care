import React from 'react';

import doctor1 from '../../../images/doctors/doctor1.png'
import doctor2 from '../../../images/doctors/doctor2.png'
import doctor3 from '../../../images/doctors/doctor3.png'
import doctor4 from '../../../images/doctors/doctor4.png'





import Expert from '../Expert/Expert';

const experts = [
    {
        img: doctor1,
        name: 'Andrew Smith',
        expertize: '-Cardiac Surgen-'
    },
    {
        img: doctor2,
        name: 'John Anderson',
        expertize: '-Mental Disorder Expert-'
    },
    {
        img: doctor3,
        name: 'Zakaria Smith',
        expertize: '-Pulmonary Expert-'
    },
    {
        img: doctor4,
        name: 'Sakib Anderson',
        expertize: '-Opthamology Expert-'
    },
]

const Experts = () => {
    return (
        <div id="expert" className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;