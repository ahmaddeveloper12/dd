
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
      <h1>Fetched Data</h1>
      
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
            <h2>{item.news}</h2>
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

      <style jsx>{`
        .data-container {
          font-family: 'Arial', sans-serif;
          margin: 40px auto;
          max-width: 1200px;
          padding: 20px;
          background-color: #f9f9f9;
          text-align: center;
          animation: fadeIn 1s ease-out;
        }

        h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 40px;
        }

        /* Search bar style */
        .search-bar {
          font-size: 1rem;
          padding: 10px;
          width: 100%;
          max-width: 400px;
          margin: 20px 0;
          border: 2px solid #007bff;
          border-radius: 5px;
          transition: border-color 0.3s ease;
        }

        .search-bar:focus {
          outline: none;
          border-color: #0056b3;
        }

        /* Horizontal line style */
        .horizontal-line {
          border: 0;
          height: 1px;
          background-color: #ddd;
          margin: 20px 0;
        }

        .item-card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin-bottom: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          will-change: transform, box-shadow;
        }

        .item-card:hover {
          transform: translateY(-10px) rotate(3deg);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .item-card h2 {
          font-size: 1.8rem;
          color: #007bff;
          margin-bottom: 15px;
          transition: color 0.3s ease;
        }

        .item-card p {
          color: #666;
          font-size: 1rem;
          line-height: 1.5;
        }

        .item-image {
          width: 100%;
          height: auto;
          max-width: 250px;
          border-radius: 8px;
          margin-top: 15px;
          transition: transform 0.3s ease;
        }

        .item-image:hover {
          transform: scale(1.1);
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .item-card {
            padding: 15px;
          }

          .item-card h2 {
            font-size: 1.5rem;
          }

          .item-image {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
