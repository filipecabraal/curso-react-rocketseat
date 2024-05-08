import styles from './Avatar.module.css'

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({ hasBorder = true, src }: AvatarProps) {
    return (
        <a 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            href={src} 
            target='blank'
        ><img src={src} /></a>
    );
}
