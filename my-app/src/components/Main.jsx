import React from 'react';
import Cards from './Cards'

const Main = () => {
    return (
        <section>
            <div className="container main">
                <ul class="nav nav-tabs mt-5 pb-2">
                    <li><a href="#">Software Development</a></li>                   
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Competative Exam</a></li>
                </ul>
                <div className="subjects">
                <div className="row">
                    <div className="col-md-4">
                    <Cards title="JAVA" img="https://image.shutterstock.com/image-photo/java-programming-language-application-web-600w-1262757355.jpg"/>
                    </div>
                    <div className="col-md-4">
                    <Cards title="PYTHON" img="https://image.shutterstock.com/image-vector/python-coding-language-sign-on-600w-1389877574.jpg"/>
                    </div>
                    <div className="col-md-4">
                    <Cards title="C++" img="https://image.shutterstock.com/image-vector/abstract-letter-c-logo-design-600w-296503478.jpg"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <Cards title="JAVA" img="https://image.shutterstock.com/image-photo/java-programming-language-application-web-600w-1262757355.jpg"/>
                    </div>
                    <div className="col-md-4">
                    <Cards title="PYTHON" img="https://image.shutterstock.com/image-vector/python-coding-language-sign-on-600w-1389877574.jpg"/>
                    </div>
                    <div className="col-md-4">
                    <Cards title="C++" img="https://image.shutterstock.com/image-vector/abstract-letter-c-logo-design-600w-296503478.jpg"/>
                    </div>
                </div>
            </div>
            <h5 className="text-right mt-4"><a href="#viewall">view all</a></h5>
            </div>
        </section>
    )
}

export default Main;