import styles from './Post.module.css';


export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media.licdn.com/dms/image/C4D03AQEIRTfw42AJgg/profile-displayphoto-shrink_800_800/0/1618577285346?e=1695254400&v=beta&t=-siKU-4rEGeRffW_GpT6Y0iyJQNf63nVX5o50lH68zU" />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Gurris</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="06 de maio as 08:13h" dateTime="2023-05-06 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="">jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}