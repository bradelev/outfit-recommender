import './PhotoPreview.css';

const PhotoPreview = ({ selectedImage, handleImageSubmit }) => {
    console.log(selectedImage);
    return <div className="preview-container">
        <h2>Your Photo</h2>
        <img src={selectedImage} alt="Preview" className="preview-image" />
        <button onClick={handleImageSubmit} className="upload-button">
            Get My Outfit
        </button>
    </div>
}

export default PhotoPreview;