import styles from "./ImageGallery.module.css";

interface Image {
id: string;
urls: { small: string };
alt_description?: string;
}

interface ImageGalleryProps {
items: Image[];
onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
return (
<ul className={styles.gallery}>
{items.map((item) => (
    <li
    key={item.id}
    className={styles.galleryItem}
    onClick={() => onImageClick(item)}
    >
    <img src={item.urls.small} alt={item.alt_description || "Image"} />
    </li>
))}
</ul>
);
};

export default ImageGallery;
