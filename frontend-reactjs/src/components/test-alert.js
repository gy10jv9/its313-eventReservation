import React from "react";

const Test_Alert = () => {
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong> WARNING: </strong> Delete this event?
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>     
            </button> 
        </div>
    )
}

export default Test_Alert