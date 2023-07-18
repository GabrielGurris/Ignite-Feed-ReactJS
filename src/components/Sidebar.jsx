import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
            />
        
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://media.licdn.com/dms/image/C4D03AQEIRTfw42AJgg/profile-displayphoto-shrink_800_800/0/1618577285346?e=1695254400&v=beta&t=-siKU-4rEGeRffW_GpT6Y0iyJQNf63nVX5o50lH68zU" />
                <strong>Gabriel Gurris</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}