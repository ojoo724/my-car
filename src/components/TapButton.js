import styles from "./TapButton.module.css";

function TapButton({ value, onClick, name }) {
  const handleClick = () => onClick(value);
  return (
    <button className={styles.tapButton} onClick={handleClick}>
      {name}
    </button>
  );
}

export default TapButton;
