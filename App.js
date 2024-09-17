import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import LiveNewsImage from './assets/images/live news.jpg'; // Ensure the path to your image is correct

const App = () => {
  const [category, setCategory] = useState('general'); // Default category

  return (
    <>
      <Navbar setCategory={setCategory} />
      {/* Conditionally render the Live News image for the General category */}
      {category === 'general' && (
        <div className="live-news-image-container">
          <img
            src={LiveNewsImage}
            alt="Live News"
            className="live-news-image"
          />
        </div>
      )}
      {/* Conditionally render News component to hide general news */}
      {category !== 'general' && (
        <>
          <h2 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
          <News category={category} />
        </>
      )}
    </>
  );
};

export default App;
