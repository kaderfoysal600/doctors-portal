import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppoinment.css'

const MakeAppoinment = () => {
    return (
       
            <section className="make-appointment">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-none d-md-block">
                            <img src={doctor} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-7 py-5 text-white" style = {{position:'relative'}}>
                            <h5 className='text-primary text-uppercase'>
                                APPOINTMENT
                            </h5>
                            <h1 className="my-4 ">
                                Make an appointment <br/>  Today 
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus!</p>
                            <button className=" btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        
    );
};

export default MakeAppoinment;