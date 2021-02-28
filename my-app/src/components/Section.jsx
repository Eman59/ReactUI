import React from 'react';
import sectionImg from '../images/sec1.jpg';
import waves from '../images/waves.png'

const Section = () => {
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 left-side">
                        <div className="data">
                            <h1 className="text-uppercase">welcome to</h1>
                        <h2>Tech <span>Factory</span></h2>
                        <p className="sub">Best Learning Institutions</p>
                        <p className="info">Like what you are learning </p><p className="info2" >Get started today</p>
                        <button type="button" className="btn ">Start</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={sectionImg} alt="sec.jpg" className="image2 mt-5"/>
                    </div>
                    <div className="col-md-12">
                    <img src={waves} alt="waves.jpg"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;