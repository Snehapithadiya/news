import React, { useEffect, useState } from 'react';
import './News.css';

const News = ({ category }) => {
  const [myNews, setMyNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  const fetchData = async () => {
    try {
      let response = await fetch(`https://inshortsapi.vercel.app/news?category=${category}`);
      let data = await response.json();
      setMyNews(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  if (selectedNews) {
    return (
      <div className="selected-news-detail">
        <h1>{selectedNews.title}</h1>
        <img src={selectedNews.imageUrl || 'default-image-url'} alt="News" style={{ width: '100%' }} />
        <p>{selectedNews.content}</p>
        <button onClick={() => setSelectedNews(null)} className="btn btn-secondary">Go Back</button>
      </div>
    );
  }

  return (
    <div className="mainDiv">
      {myNews.map((ele, index) => (
        <div key={index} className="card" style={{ width: '350px', height: 'auto', marginLeft: '4rem', marginTop: '2rem' }}>
          <img src={ele.imageUrl || 'default-image-url'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{ele.author || 'NEWS'}</h5>
            <p className="card-text">{ele.title}</p>
            <button onClick={() => setSelectedNews(ele)} className="btn btn-primary">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
