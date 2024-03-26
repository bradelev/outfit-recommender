import classes from "./Gallery.module.css";

const Gallery = ({ photos }) => {
  return (
    <div className={classes.gallery} id="photoResult">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index}`} />
      ))}
    </div>
  );
};

export default Gallery;
