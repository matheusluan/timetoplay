import React from 'react';
import styles from './Home.module.css';
import {ReactComponent as Ghost_green} from '../../Assets/ghost_green.svg'
import {ReactComponent as Perseguicao} from '../../Assets/perseguicao.svg'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function Home (){

    return (
        <div className={styles.container_roxo}>
            <h1 className={styles.title}><span>T</span>ime<span>T</span>o<span>P</span>lay</h1>
            <section className={styles.oldwoman}>
                <Ghost_green/>
                <Button> Old-Woman</Button>
            </section>
            <section className={styles.minesweeper}>
                <Ghost_green/>
                <Button> MinesWeeper</Button>
            </section>
            <footer className={styles.animeLeft}>
                <Perseguicao/>
            </footer>
        </div>
    );
}