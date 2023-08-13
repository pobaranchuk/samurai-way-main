import React from "react";

function Star() {
    console.log("star rendered")
    return (
        <span>star </span>
    )
}

export function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}