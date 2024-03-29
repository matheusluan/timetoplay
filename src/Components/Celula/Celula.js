import React from "react";
import styles from './Celula.module.css';
import Ghost_purple from '../../Assets/ghost_purple.svg';
import Pacman_green from '../../Assets/pacman_green.svg';

const Celula = ({ value, onClick, ...props}) => {

    return (

       <button onClick={onClick} className={styles.celula} >
           {value &&( value === 'X' ? <img src={Ghost_purple} alt="X" className={styles.animationIcon}/> : <img src={Pacman_green} alt="O" className={styles.animationIcon}/>)}
       </button>
   
    );
}

export default Celula;
