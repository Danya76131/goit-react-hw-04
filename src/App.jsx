import { useEffect } from "react";
import { useState } from "react";
import { searchImages } from "./api/unsplash";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await searchImages(query, page);
        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
        setTotalPages(data.total_pages);
        setError(null);
      } catch {
        setError("Failed to load images. Try agan later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = () => setPage((prev) => prev + 1);
  const handleImageClick = (image) => setSelectedImage(image);
  const handleCloseModal = () => setSelectedImage(null);

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      )}
    </>
  );
};
export default App;
