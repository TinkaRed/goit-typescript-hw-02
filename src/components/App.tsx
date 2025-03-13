import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description?: string;
}

const API_KEY = "sbkgHS8qs61ODnhPJwpiBdg0b1ihnHlue4MX52kntj4";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const onSubmit = (values: { search: string }) => {
    setPage(1);
    setImages([]);
    setSearchTerm(values.search);
  };

  useEffect(() => {
    if (!searchTerm) return;

    const fetchImages = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get<{ results: Image[] }>(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&client_id=${API_KEY}`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage errormessage={error} />}
      <ImageGallery items={images} onImageClick={(image: Image) => setSelectedImage(image)} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />}
      {selectedImage && <ImageModal selectedImage={selectedImage} closeModal={() => setSelectedImage(null)} />}
    </>
  );
};

export default App;
