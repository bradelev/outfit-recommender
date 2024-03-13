import "./Gallery.css";

const Gallery = ({ photos }) => {
    return (
        <div className="gallery">
            {photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Photo ${index}`} />
            ))}
        </div>
    );
};

export default Gallery;