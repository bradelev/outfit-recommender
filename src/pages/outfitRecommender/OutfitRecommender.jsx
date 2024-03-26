import { useState } from 'react';
import Gallery from '../../components/Gallery';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import PhotoPreview from '../../components/PhotoPreview';
import FileInput from '../../components/FileInput';
import classes from './OutfitRecommender.module.css';
import RelatedProducts from '../../components/RelatedProducts';

const OutfitRecommender = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // this function is used to scroll to the element with the given id
  const scrollTo = (id, time = 0) => {
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: 'smooth'
      })
    }, time);
  }

  const getRelatedProducts = (relatedProducts, qty = 3) => {
    const products = [];
    let tempRelatedProducts = [...relatedProducts];
    for (let i = 0; i < qty; i++) {
      if (tempRelatedProducts.length === 0) break;
      const randomIndex = Math.floor(Math.random() * tempRelatedProducts.length);
      products.push(tempRelatedProducts[randomIndex]);
      tempRelatedProducts.splice(randomIndex, 1);
    }

    return products;
  };

  const handleImageUpload = (event) => {
    setGalleryPhotos([]);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = e.target.result;
        setSelectedImage(image); // Ready in Base64

        scrollTo('photoPreview');
        
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSubmit = async () => {
    if (!selectedImage) return;

    // TODO:  remove this array
    const imagesList = [
      'img/women-1.png',
      'img/women-2.png',
      'img/women-3.png',
      'img/women-4.png',
      'img/women-5.png',
      'img/shoes-1.png',
      'img/cloth-1.png',
      'img/cloth-2.png'
    ];

    const relatedProductList = [{
      title: 'Femella Women Black Dress',
      img: 'img/25971.jpg',
      price: '$49.99',
    }, {
      title: 'French Connection Women White & Blue  Striped Dress',
      img: 'img/48525.jpg',
      price: '$59.99',
    }, {
      title: 'Latin Quarters Women & White Black Dress',
      img: 'img/57995.jpg',
      price: '$39.99',
    }, {
      title: 'Rocia Women Silver Heels',
      img: 'img/54128.jpg',
      price: '$69.99',
    }, {
      title: 'Rocia Women Bronze Heels',
      img: 'img/54126.jpg',
      price: '$79.99',
    }, {
      title: 'Rocia Women Black Heels',
      img: 'img/54127.jpg',
      price: '$89.99',
    }];

    setLoading(true);
    setError(null);

    scrollTo('uploadButton');
    
    // TODO:  remove this timeout and replace with the commented code below
    setTimeout(() => {
      setLoading(false);
      setGalleryPhotos([...galleryPhotos, ...[imagesList[Math.floor(Math.random() * imagesList.length)]]]); // select only one image from the array
      setRelatedProducts([...relatedProducts, ...getRelatedProducts(relatedProductList)]);
      scrollTo('photoResult', 100);
    }, 4000);

    // try {
    //   const response = await axios.post('AI_RECOMMENDER_ENDPOINT', {
    //     image: selectedImage,
    //   });
    //   console.log('Image uploaded successfully:', response.data);
    // TODO: process response data and add it to the array
    //   setGalleryPhotos([...galleryPhotos, image]); // From the API results
    //   setLoading(false);
    // } catch (error) {
    //   console.error('Error uploading image:', error);
    //   setError('An error occurred while uploading the image. Please try again.');
    //   setLoading(false);
    // }
  };

  return (
    <div className={classes.app}>
      <h1>Outfit Recommender</h1>
      <FileInput handleImageUpload={handleImageUpload} />
      {selectedImage && (<PhotoPreview selectedImage={selectedImage} handleImageSubmit={handleImageSubmit} />)}
      {loading && <Loader />}
      {error && <Error error={error} />}
      <Gallery photos={galleryPhotos} />
      {!loading && <RelatedProducts products={relatedProducts} />}
    </div>
  );
};

export default OutfitRecommender;
