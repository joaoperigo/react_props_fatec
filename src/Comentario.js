import React from 'react'

const Comentario = (props) => {
    return (
        <div className="d-flex">
            <div className="d-flex align-items-center">
                <img src={props.thumb} />
            </div>
            <div className="w-100 ms-2 border">
                <h4 className="text-center">{props.titulo}</h4>
                <p className="text-center">{props.descricao}</p>
            </div>
        </div>
    )
}

export default Comentario;

