import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <h1>Drive Home with <span>Perfect Car</span></h1>
        <p>Explore our extensive inventory and drive today.</p>
        <div className={styles.actions}>
          <button className={styles.primary}>Explore More</button>
          <button className={styles.secondary}>▶ Watch Video</button>
        </div>
      </div>
      <div className={styles.right}>
        <img src="/cars.png" alt="cars" />
      </div>
    </section>
  );
}
