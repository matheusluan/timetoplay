import React from 'react';
import styles from './OldWoman.module.css';
import Ghost_purple from '../../Assets/ghost_purple.svg'
import Pacman_green from '../../Assets/pacman_green.svg'
import Celula from '../Celula/Celula';

export default function OldWoman(){

    return (
        <div className={styles.container_roxo}>
            
           
                <h1 className={styles.title}><span>O</span>ld<span>W</span>oma<span>N</span></h1>
            
                <section className={styles.table}>
                    <section className={styles.linha}>
                        <Celula id="1"><img className={styles.animationIcon} src={Ghost_purple} alt=""/></Celula>
                        <Celula id="2"><img className={styles.animationIcon} src={Pacman_green} alt=""/></Celula>
                        <Celula id="3"><img className={styles.animationIcon} src={Pacman_green} alt=""/></Celula>
                    </section>
                    <section className={styles.linha}>
                        <Celula id="4"><img className={styles.animationIcon} src={Pacman_green} alt=""/></Celula>
                        <Celula id="5"><img className={styles.animationIcon} src={Ghost_purple} alt=""/></Celula>
                        <Celula id="6"><img className={styles.animationIcon} src={Ghost_purple} alt=""/></Celula>
                    </section>
                    <section className={styles.linha}>
                        <Celula id="4"><img className={styles.animationIcon} src={Pacman_green} alt=""/></Celula>
                        <Celula id="5"><img className={styles.animationIcon} src={Ghost_purple} alt=""/></Celula>
                        <Celula id="6"><img className={styles.animationIcon} src={Ghost_purple} alt=""/></Celula>
                    </section>                
                </section>

                <footer>
                    <Celula id="p1"><h1 className={styles.player1}>P1</h1></Celula>
                    <Celula id="p2"><h1 className={styles.player2}>P2</h1></Celula>
                </footer>
           
            
              
        </div>
    );
}