import React from "react";
import styles from './Quadro.module.css';
import Celula from "../Celula/Celula";

const Quadro = ({ quadrados, onClick, ...props}) => {

    return (

        <div {...props} className= {styles.quadro} >
            {quadrados.map((quadrado, i) => (
                <Celula key={i} value={quadrado} onClick={() => onClick(i)} />
            ))}
        </div>
   
    );
}

export default Quadro;
