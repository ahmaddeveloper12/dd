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
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        h1 {
          text-align: center;
          color: #4d1d6b; /* Dark pink */
          font-size: 2rem;
        }

        .form {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-size: 1.1rem;
          color: #4d1d6b; /* Dark pink */
          margin-bottom: 5px;
        }

        .input-field {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 2px solid #4d1d6b; /* Dark pink */
          font-size: 1rem;
          color: #333;
          background-color: #f9f9f9;
        }

        .input-field:focus {
          outline: none;
          border-color: #d63384; /* Lighter dark pink for focus */
        }

        .submit-button {
          width: 100%;
          padding: 12px;
          background-color: #4d1d6b; /* Dark pink */
          color: white;
          font-size: 1.2rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #d63384; /* Lighter dark pink */
        }

        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }

          h1 {
            font-size: 1.5rem;
          }

          .form {
            padding: 20px;
          }

          .input-field {
            font-size: 0.9rem;
          }

          .submit-button {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
