import styles from './Header.module.css';

import Logo from '../assets/logo.svg';

// Criar comp. React com a primeira letra maiúscula, p/ não conflitar com palavras chaves;
export  function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={Logo} alt="Logotipo curso React Rocket Seat" />
            </header>
        </>
    );
}
