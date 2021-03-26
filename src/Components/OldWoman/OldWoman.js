import React from 'react';
import styles from './OldWoman.module.css';
import Quadro from '../Quadro/Quadro';
import Reboot from '../../Assets/Reboot.svg';

import Ghost_purple from '../../Assets/ghost_purple.svg';
import Pacman_green from '../../Assets/pacman_green.svg';

export default function OldWoman(){

    const [celula, setCelula] = React.useState(Array(9).fill(null));
    const [xProximo, setXproximo] = React.useState(true);

    
    function checkWinner(celula){
        
        const combinationsWinner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [0,3,6],
            [2,4,6],
            [1,4,7],
            [2,5,8],
        ]

        for (let i = 0 ; i < combinationsWinner.length; i++){
            const [a,b,c] = combinationsWinner[i];

          
            if(celula[a] && celula[a] === celula[b] && celula[a] === celula[c]){

                return combinationsWinner[a];
            }
        }
        return null;
    }

    const winner = checkWinner(celula);
    console.log(winner);

    const Winner = () => {

        const ganhador = winner === 'X' ? 'Verde' : 'Roxo';
        return (
    
            <div>
                { winner ? <div> Winner : {ganhador} </div> : <div> Proximo Jogador : {xProximo ?  <img src={Ghost_purple} alt="X"/> : <img src={Pacman_green} alt="O"/>}</div> }
            </div>
       
        );
    }


    function handleClick(i) {
        
    const quadroCopy = [...celula];

        if( winner || quadroCopy[i]){
 
            return    
        }  

        quadroCopy[i] = xProximo ?  "X" :   "O";

        setCelula(quadroCopy);
        setXproximo(!xProximo);
    }

    return (
        <div className={styles.container_roxo}>
            
                <h1 className={styles.title}><span>O</span>ld<span>W</span>oma<span>N</span></h1>
            
                <Quadro onClick={handleClick} quadrados={celula}

                />      

            <section className={styles.footer}>
            <Winner/>
            <div onClick={()=>setCelula(Array(9).fill(null), setXproximo(true))} className={styles.button}>
                <img src={Reboot} alt="reiniciar" className={styles.animationIcon}/>
            </div>
            </section>
           
        </div>
    );
}