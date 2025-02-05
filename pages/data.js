import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component from next/image

export default function DataPage() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/submitData');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  // Handle search filter
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="data-container">
      <h1>Latest Bollywood</h1>
      
      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search by title or description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <hr className="horizontal-line" />
      
      {/* Display filtered data */}
      {filteredData.length === 0 ? (
        <p>No data available</p>
      ) : (
        filteredData.map((item, index) => (
          <div key={index} className="item-card">
            <h2>{item.title}</h2>
            <h3>{item.news}</h3>
            <p>{item.description}</p>
            {item.imgUrl && (
              <Image
                src={item.imgUrl}
                alt={item.title}
                className="item-image"
                width={250} // Define the width of the image
                height={150} // Define the height of the image (adjust as needed)
                priority={false} // Optional: Adjust based on whether the image is above the fold
              />
            )}
          </div>
        ))
      )}

      {/* Style Section */}
      <style jsx>{`
        .data-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Arial', sans-serif;
        }

        h1 {
          text-align: center;
          color: #4d1d6b; /* Dark pink */
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .search-bar {
          width: 100%;
          padding: 12px;
          margin-bottom: 20px;
          border-radius: 8px;
          border: 2px solid #4d1d6b; /* Dark pink */
          font-size: 1rem;
          color: #333;
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .search-bar:focus {
          outline: none;
          border-color: #d63384; /* Lighter pink */
        }

        .horizontal-line {
          border-top: 2px solid #ff99cc; /* Light pink */
          margin: 20px 0;
        }

        .item-card {
          background-color: #fff;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
          transform: perspective(1000px) rotateX(0);
        }

        .item-card:hover {
          transform: perspective(1000px) rotateX(5deg); /* 3D effect on hover */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .item-card h2 {
          color: #4d1d6b; /* Dark pink */
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .item-card h3 {
          color: #d63384; /* Lighter dark pink for 'news' */
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .item-card p {
          font-size: 1rem;
          color: #555;
        }

        .item-image {
          margin-top: 15px;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .data-container {
            padding: 15px;
          }

          h1 {
            font-size: 2rem;
          }

          .search-bar {
            font-size: 0.9rem;
          }

          .item-card h2 {
            font-size: 1.5rem;
          }

          .item-card h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}
