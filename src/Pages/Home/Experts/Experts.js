import React from 'react';

import services1 from '../../../images/services/5.jpg'
import services2 from '../../../images/services/3.jpg'
import services3 from '../../../images/services/7.jpg'
import services4 from '../../../images/services/6.jpg'
import services5 from '../../../images/services/1.jpg'
import services6 from '../../../images/services/11.jpg'






import Expert from '../Expert/Expert';

const experts = [
    {
        img: services1,
        name: 'Andrew Smith',
        expertize: '-Cardiac Surgen-'
    },
    {
        img: services2,
        name: 'John Anderson',
        expertize: '-Mental Disorder Expert-'
    },
    {
        img: services3,
        name: 'Zakaria Smith',
        expertize: '-Pulmonary Expert-'
    },
    {
        img: services4,
        name: 'William Anderson',
        expertize: '-Neurology Expert-'
    },
    {
        img: services5,
        name: 'Panday Jaccy',
        expertize: '-General surgen Expert-'
    },
    {
        img: services6,
        name: 'Jackson William',
        expertize: '-Dentist Expert-'
    },


]

const Experts = () => {
    return (
        <div id="expert" className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row" style={{ marginTop: "50px", marginBottom: "50px" }}>
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