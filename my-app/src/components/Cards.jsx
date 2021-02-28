import React from "react";
import ratings from "../images/ratings.png"

const Cards = (props) => {
    return (
        <>
            <div className="card mt-5">
                <img class="card-img-top" src={props.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam et nostrum aut nisi odio deleniti veritatis laudantium! Consectetur, est tempora.
                    </p>
                    <div className="row">
                            <p className="card-text text-right author">By Emma Jones</p>
                            <p className="card-text text-right"><img src={ratings} alt="rating" /></p>


                            <p className="card-text ratno">4.6</p>

                    </div>
                    <h4> ₹ 699.00 <del>₹ 1,299.00</del> </h4>
                </div>
            </div>
        </>
    );
};

export default Cards;
