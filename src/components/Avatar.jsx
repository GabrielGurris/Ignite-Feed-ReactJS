import styles from './Avatar.module.css';

export function Avatar( { hasBorder = true, src } ){          /*Ao inves de passar o PROPS, passa as propriedades ja descontruídas, tendo como passar valores default*/

    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    );
}