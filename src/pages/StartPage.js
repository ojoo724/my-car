import { Link } from "react-router-dom";
import styles from "./StartPage.module.css";

function StartPage() {
  return (
    <div>
      <h1 className={styles.title}>내가 원하는 차는 무엇일까?</h1>
      <p>여러</p>
      <div className={styles.img__div}>
        <div className={(styles.car__img, styles.car__img__01)}></div>
        <div className={(styles.car__img, styles.car__img__02)}></div>
        <div className={(styles.car__img, styles.car__img__03)}></div>
        <div className={(styles.car__img, styles.car__img__04)}></div>
        <div className={(styles.car__img, styles.car__img__05)}></div>
        <div className={(styles.car__img, styles.car__img__06)}></div>
      </div>
      <div>
        <Link to="/pickCar">
          <button>지금 시작하기</button>
        </Link>
      </div>
    </div>
  );
}

export default StartPage;
