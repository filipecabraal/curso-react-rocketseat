import { AvatarProps } from '../interfaces/Avatar.interface'

import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return (
        <a 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            href={props.src} 
            target='blank'
        >
            <img {...props} />
        </a>
    );
}
