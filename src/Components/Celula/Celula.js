import React from "react";
import styles from './Celula.module.css';

const Celula = ({children, id, ...props}) => {

    return (
        <div {...props} className= {styles.celula}>
            {children}
        </div>
    );
}

export default Celula;
