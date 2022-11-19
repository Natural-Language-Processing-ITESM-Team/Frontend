import React from "react";
import "../chat.scss"

export const Input = () => {
    return(
        <div className="input">
            <input type="text" placeholder="Escribe algo..." />
            <div className="send">
                <button>Enviar</button>
                <button>Grabar</button>
            </div>
        </div>
    )
}