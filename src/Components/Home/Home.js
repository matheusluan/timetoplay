import React from 'react';
import styles from './Home.module.css';
import Ghost_green from '../../Assets/ghost_green.svg'
import Perseguicao from '../../Assets/perseguicao.svg'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export default function Home (){

    return (
        <div className={styles.container_roxo}>
            <h1 className={styles.title}><span>T</span>ime<span>T</span>o<span>P</span>lay</h1>
            <section className={styles.oldwoman}>
                <img src={Ghost_green} alt="Ghost_green"/>
                <Link to="/oldwoman"> <Button>Old-Woman Aula de ADMS</Button></Link>
            </section>
            <section className={styles.minesweeper}>
                <img src={Ghost_green} alt="Ghost_green"/>
                <Link to="/mineswweeper"><Button>MinesWeeper </Button></Link>
            </section>
            <footer className={styles.animeLeft}>
                <img src={Perseguicao} alt="Ghost_green"/>
            </footer>
        </div>
    );
}