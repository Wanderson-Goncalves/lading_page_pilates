import React from 'react';
import Logo from './Logo.svg';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.cabecalho}>
            <h1><img  className = {styles.logo} src={Logo} alt='Logo da Clínica Flor de Cerejeira' /></h1>

            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Serviços</a></li>
                    <li><a href='#'>Sobre Nós</a></li>
                    <li><a href='#'>Contato</a></li>
                </ul>
            </nav>

            <div>
                <i className='fas fa-bars'></i>
                <i className='fas fa-times'></i>
            </div>
        </header>
    );
}
