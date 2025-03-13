// import { Oval } from "react-loader-spinner";
import { RingLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <RingLoader size={50} color="blue" loading={true} />
    </div>
  );
};

export default Loader;
