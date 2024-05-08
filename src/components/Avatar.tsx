import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

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
