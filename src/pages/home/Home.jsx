/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const image = [
  'img/women-1.png',
  'img/women-2.png',
  'img/women-3.png',
  'img/women-4.png',
  'img/women-5.png',
  'img/shoes-1.png',
  'img/cloth-1.png',
  'img/cloth-2.png'
];

// Mocked data for offers and trends
const offersData = [
  {
    id: 1,
    img: image[0],
    title: 'Summer Sale',
    description: 'Up to 50% off on summer items!',
    cta: 'Shop Now',
  },
  {
    id: 2,
    img: image[1],
    title: 'Winter Collection',
    description: 'Get ready for winter with the latest cozy clothes.',
    cta: 'Discover',
  },
  {
    id: 3,
    img: image[2],
    title: 'Athleisure Wear',
    description: 'Stay comfy and chic in our new range of athleisure.',
    cta: 'Browse Collection',
  },
  {
    id: 4,
    img: image[3],
    title: 'Formal Attire',
    description: 'Impress at the office with our premium suits and dresses.',
    cta: 'View Offers',
  },
  {
    id: 5,
    img: image[4],
    title: 'Casual Weekend',
    description: 'Relax in style with our casual wear collection.',
    cta: 'Shop Casuals',
  },
  {
    id: 6,
    img: image[5],
    title: 'Evening Elegance',
    description: 'Find your perfect outfit for those special evening occasions.',
    cta: 'See Evening Wear',
  },
  {
    id: 7,
    img: image[6],
    title: 'Fitness Focus',
    description: 'Gear up with our latest fitness and workout attire.',
    cta: 'Get Active',
  },
  {
    id: 8,
    img: image[7],
    title: 'Footwear Frenzy',
    description: 'Step up your game with our stylish footwear collection.',
    cta: 'Shop Footwear',
  },
];

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <header style={styles.header}>
        <h1>Welcome to Fashionista!</h1>
        <p>Find the best clothes and trends that match your style</p>
      </header>

      <section style={styles.ctaSection}>
        <h2>Get Your Personalized Outfit</h2>
        <Link to="choose-outfit" style={styles.ctaButton}>
          Try Outfit Recommender
        </Link>
      </section>

      <OffersSection 
        title="Exclusive Offers"
        offers={offersData}
        styleTheme="dark"
      ></OffersSection>
      <OffersSection 
        title="Latest Trends"
        offers={offersData}
        styleTheme="trends"
      ></OffersSection>
    </div>
  );
};

const OffersSection = ({ title, offers, styleTheme }) => {
  // Determine styles based on styleTheme
  const sectionStyles = styleTheme === 'dark' ? styles.darkThemeSection : styles.trendsThemeSection;
  const offerItemStyles = styleTheme === 'dark' ? styles.darkThemeOfferItem : styles.trendsThemeOfferItem;
  const ctaButtonStyles = styleTheme === 'dark' ? styles.darkThemeCtaButton : styles.trendsThemeCtaButton;

  offers = shuffle(offers); // Shuffle the offers for a random display

  return (
    <section style={{...styles.offersSection, ...sectionStyles}}>
      <h2>{title}</h2>
      <div style={styles.offersGrid}>
        {offers.map((offer) => (
          <div key={offer.id} style={{...styles.offerItem, ...offerItemStyles}}>
            <img src={offer.img} alt={offer.title} style={styles.offerImage} />
            <div style={styles.offersWrapper}>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
            <button style={{...styles.ctaButton, ...ctaButtonStyles}}>{offer.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

const shuffle = (data) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  return data;
};

// Inline styles
const styles = {
  homeContainer: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    margin: '20px 0',
  },
  ctaSection: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  ctaButton: {
    display: 'inline-block',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#c0a16b',
    border: 'none',
    cursor: 'pointer',
  },
  offersSection: {
    padding: '20px',
    overflow: 'hidden',
    position: 'relative',
  },
  offersGrid: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  offersWrapper: {
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  offerImage: {
    maxWidth: '200px',
    height: 'auto',
    maxHeight: '180px',
    overflowY: 'hidden',
  },
  offerItem: {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    width: '240px',
    textAlign: 'center',
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'column',
  },
  trendsSection: {
    padding: '20px',
    backgroundColor: '#f7f7f7',
  },
  trendsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  trendItem: {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    width: 'calc(50% - 20px)',
    textAlign: 'center',
  },
  trendImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  chevronLeft: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    fontSize: '30px',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: '6px 10px',
  },
  chevronRight: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    fontSize: '30px',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: '6px 10px',
  },
  darkThemeSection: {
    backgroundColor: '#333',
    color: '#fff',
  },
  trendsThemeSection: {
    backgroundColor: '#f7f7f7',
    color: '#333',
  },
  darkThemeOfferItem: {
    backgroundColor: '#444',
    border: '1px solid #666',
  },
  trendsThemeOfferItem: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
  },
  darkThemeCtaButton: {
    backgroundColor: '#c0a16b',
    color: '#fff',
  },
  trendsThemeCtaButton: {
    backgroundColor: '#4e9f3d',
    color: '#fff',
  },
};

export default Home;
