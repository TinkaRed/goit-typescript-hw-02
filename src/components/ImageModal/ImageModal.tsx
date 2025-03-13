import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

interface Image {
urls: { regular: string };
alt_description?: string;
}

interface ImageModalProps {
selectedImage: Image | null;
closeModal: () => void;
}

ReactModal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, closeModal }) => {
return (
    <ReactModal
    isOpen={!!selectedImage}
    onRequestClose={closeModal}
    className={styles.modal}
    overlayClassName={styles.overlay}
    >
    <button onClick={closeModal} className={styles.closeButton}>
        &times;
    </button>
    {selectedImage && (
        <img
        src={selectedImage.urls.regular}
        alt={selectedImage.alt_description || "Image"}
        className={styles.image}
        />
    )}
    </ReactModal>
);
};

export default ImageModal;
