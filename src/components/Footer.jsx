import React, { Fragment } from "react" 

export function Footer() {
    return (
        <Fragment>
            <p style= {{textAlign: "center", left: "50%", position: "absolute", bottom: 0, transform: `translateX(-50%)`}}>
            Nicolas inc. &copy;2022, created with react with &hearts; 
            </p>
            
        </Fragment>

    )
}

export default Footer