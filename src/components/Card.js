import React from "react";

const Card = (props) => {
    return (
        <div className="container">
            <div className="card card-center mt-5">
                <h3 className="text-center text-dark mt-3">{props.name}</h3>
                <img src={props.img} className="img-fluid mt-3" alt="" />
                <div class="card-body">
                    <p className="card-text text-dark">{props.like}</p>
                    <p className="card-text text-dark">{props.year}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;