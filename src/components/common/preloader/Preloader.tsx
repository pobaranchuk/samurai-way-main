import React from 'react';
import preloader from "../../../asets/images/Spin-1.7s-200px.svg";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={"Spinning"}/>
        </div>
    );
};

export default Preloader;