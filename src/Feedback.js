import React from 'react'

const Feedback = props => {
    return (
        <div className="d-flex justify-content-evenly m-2">
            <button
                type="button"
                onClick={props.funcaoOK}
                className="btn btn-primary">
                    <i class="fas fa-thumbs-up"></i>
                    {props.like}
            </button>
            <button
                type="button"
                onClick={props.funcaoNOK}
                className="btn btn-danger">
                    <i class="far fa-thumbs-down"></i>
                    {props.dislike} 
            </button>
        </div>
    )
}

export default Feedback