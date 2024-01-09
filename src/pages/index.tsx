import Head from "next/head";
import styles from "../styles/home.module.css";
import Image from "next/image";

import heroImg from "../../public/assets/hero.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logoContent}>
        <Image
          className={styles.hero}
          alt="Logo Tarefas Plus"
          src={heroImg}
          priority
        />
      </div>
      <h1>Sistema feito para você organizar<br/>seus estudos</h1>
    </main>

  )
}
