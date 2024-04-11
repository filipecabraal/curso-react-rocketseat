import styles from './Header.module.css';

// Criar comp. React com a primeira letra maiúscula, p/ não conflitar com palavras chaves;
export  function Header() {
    return (
        <>
            <header className={styles.header}>
                <strong>Ignite Feed</strong>
            </header>
        </>
    );
}
