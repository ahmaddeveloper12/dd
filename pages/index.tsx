export default function Home() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">BollyStar</div>
        <nav>
          <ul>
            <li><a className="one" href="./wo">Form</a></li>
            <li><a href="./news">Blog</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to the latest bollywood news</h1>
        <p>User can also upload latest news about bollywood and social media.</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          World no. 1 bollywood latest news site , User can also upload latest news about bollywood and social media..
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Earning :</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Content</h3>
            <p>Most viewed content get 2 dollars on each blogg.</p>
          </div>
          <div className="service-card">
            <h3>Start of Earning</h3>
            <p>If you add 100 contents then you get money from site.</p>
          </div>
          <div className="service-card">
            <h3>Types of content</h3>
            <p>Only bollywood and entertainment content creator get money after 100 posts.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>If you are ready to elevate your online presence, get in touch with us!</p>
        <p>Get in touch with (Email:codewithahmad363@gmail.com)</p>

      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 My Professional Site | All rights reserved</p>
      </footer>

      <style jsx>{`
        /* General Styles */
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f8e1f4;
          color: #333;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: #e91e63;
          width: 100%;
          color: white;
        }
        .header .logo {
          font-size: 24px;
          font-weight: bold;
        }
        .header nav ul {
          display: flex;
          gap: 20px;
        }
        .header nav ul li a {
          color: white;
          text-decoration: none;
          font-size: 16px;
        }
        .header nav ul li a:hover {
          text-decoration: underline;
        }

        /* Hero Section */
        .hero {
          text-align: center;
          background-color: #e91e63;
          color: white;
          padding: 80px 20px;
          width: 100%;
        }
        .hero h1 {
          font-size: 40px;
          margin-bottom: 20px;
        }
        .hero p {
          font-size: 20px;
          margin-bottom: 30px;
        }
        .cta-button {
          background-color: #ffffff;
          color: #e91e63;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        }
        .cta-button:hover {
          background-color: #ff80ab;
        }

        /* About Section */
        .about {
          padding: 40px 20px;
          background-color: #fff;
          text-align: center;
        }
        .about h2 {
          font-size: 32px;
          margin-bottom: 20px;
        }
        .about p {
          font-size: 18px;
          line-height: 1.6;
        }

        /* Services Section */
        .services {
          background-color: #f8e1f4;
          padding: 60px 20px;
          text-align: center;
        }
        .services h2 {
          font-size: 32px;
          margin-bottom: 40px;
        }
        .service-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .service-card {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .service-card h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .service-card p {
          font-size: 16px;
        }

        /* Contact Section */
        .contact {
          background-color: #e91e63;
          color: white;
          padding: 60px 20px;
          text-align: center;
        }
        .contact h2 {
          font-size: 32px;
          margin-bottom: 20px;
        }
        .contact p {
          font-size: 18px;
          margin-bottom: 20px;
        }

        /* Footer */
        .footer {
          background-color: #333;
          color: white;
          padding: 20px 0;
          width: 100%;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 28px;
          }
          .hero p {
            font-size: 18px;
          }
          .cta-button {
            padding: 8px 16px;
          }
        }

        @media (max-width: 480px) {
          .header {
            flex-direction: column;
            text-align: center;
          }
          .header nav ul {
            flex-direction: column;
            gap: 10px;
          }
          .cta-button {
            padding: 8px 16px;
            font-size: 14px;
          }
            .one{
            color: black;
            }
        }
      `}</style>
    </div>
  );
}
