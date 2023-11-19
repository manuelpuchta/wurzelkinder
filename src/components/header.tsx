import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/logo.jpg"
          alt="Wurzelkinder Kita Logo"
          width={1260}
          height={240}
          priority
        />
      </div>
      <div className={styles.menu}>Menü</div>
    </header>
  );
}
