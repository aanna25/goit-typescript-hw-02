import { useState, useEffect } from "react";
import { getImages } from "./api/unsplashApi";
import style from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [hasMorePhotos, setHasMorePhotos] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results, total_pages } = await getImages(query, page);
        if (results.length === 0 && page === 1) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...results]);
        setHasMorePhotos(page < total_pages);
      } catch {
        setError("The image could not be loaded. Please try again");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (!newQuery.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setIsEmpty(false);
    setHasMorePhotos(false);
    setError("");
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (image) => {
    setModalImage({
      url: image.urls.regular,
      alt: image.alt_description,
      author: image.user.name,
      likes: image.likes,
      description: image.description || "Description missing",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className={style.container}>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
      {(error || isEmpty) && (
        <ErrorMessage message={error || "Nothing was found for your request"} />
      )}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && hasMorePhotos && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalImage && (
        <ImageModal
          isOpen={isModalOpen}
          image={modalImage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
