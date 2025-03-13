import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
errormessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errormessage }) => {
return <p className={styles.error}>{errormessage}</p>;
};

export default ErrorMessage;
