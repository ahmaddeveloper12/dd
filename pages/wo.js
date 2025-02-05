import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [news, setNews] = useState(''); // Added state for 'news'
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, description, imgUrl, news }; // Include 'news' in the data object

    try {
      // Submit the form data to the API
      const response = await fetch('/api/submitData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        // Redirect to the data-fetching page
        router.push('/data');
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error submitting form data', error);
    }
  };

  return (
    <div className="container">
      <h1>Submit Your Data</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>News</label> {/* Changed label from 'news' */}
          <textarea
            value={news} // Bind to 'news' state
            onChange={(e) => setNews(e.target.value)} // Set 'news' value
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
          background-color: #f4f7f6;
          padding: 20px;
          perspective: 1000px; /* Adds perspective for 3D effect */
        }

        h1 {
          margin-bottom: 20px;
          font-size: 2.5rem;
          color: #333;
          text-align: center;
        }

        .form {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 400px;
          transition: transform 0.3s ease, box-shadow 0.4s ease, filter 0.5s ease;
          transform-style: preserve-3d;
        }

        .form:hover {
          transform: rotateY(10deg) rotateX(10deg);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          filter: brightness(1.1);
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: 600;
          color: #555;
        }

        .input-field {
          width: 100%;
          padding: 12px;
          margin: 5px 0;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 1rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .input-field:focus {
          border-color: #0070f3;
          outline: none;
          transform: scale(1.03);
        }

        .submit-button {
          width: 100%;
          padding: 12px;
          background-color: #0070f3;
          color: white;
          font-size: 1.1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .submit-button:hover {
          background-color: #005bb5;
          transform: scale(1.05);
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }

          .form {
            width: 100%;
            padding: 15px;
          }

          .input-field {
            padding: 10px;
          }

          .submit-button {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}
