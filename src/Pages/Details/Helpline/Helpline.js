import React from 'react';
import './Helpline.css'

const Helpline = () => {
    return (
        <div className="helpline">
            <div >
                <img src="https://i.ibb.co/2Z0pXd6/logo11.jpg" alt="" style={{ width: "200px" }} />
            </div>
            <div>
                <h2 style={{ color: "blue" }}> Emergency Help Line</h2>
                <h6> 24x7 Help Line no: +971 15085922</h6>
                <p style={{ color: "red", fontWeight: "bold" }}> Ambulance: contact no- +971 39328595 </p>
                <p>Nurse: +912586582552</p>
                <h6 style={{ color: "green", fontWeight: "bold" }} >Doctors Contact:  +971 25082525</h6>

            </div>

        </div>
    );
};

export default Helpline;