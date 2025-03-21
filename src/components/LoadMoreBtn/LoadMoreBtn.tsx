import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      LOAD MORE
    </button>
  );
};

export default LoadMoreBtn;
