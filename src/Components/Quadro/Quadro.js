import React from "react";
import styles from './Quadro.module.css';
import Ghost_purple from '../../Assets/ghost_purple.svg';
import Pacman_green from '../../Assets/pacman_green.svg';
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
