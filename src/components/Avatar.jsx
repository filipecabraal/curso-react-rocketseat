import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
    return (
        <a 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            href={src} 
            target='blank'
        ><img src={src} /></a>
    );
}
