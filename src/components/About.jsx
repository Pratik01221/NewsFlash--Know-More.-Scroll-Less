import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About NEWSFLASH 📰</h1>

      <p className="lead text-center">
        NEWSFLASH is a modern news web application that delivers the latest
        headlines from around the world in a fast and clean interface.
      </p>

      <hr />

      <h3>🚀 What This Website Does</h3>
      <ul>
        <li>Provides category-based news (Business, Sports, Technology, etc.)</li>
        <li>Allows users to search news by title</li>
        <li>Displays news with images, author, and publish date</li>
        <li>Supports infinite scrolling for better user experience</li>
      </ul>

      <h3 className="mt-4">⚙️ How It Works</h3>
      <p>
        The application fetches news data from an API and dynamically renders
        articles using React components. It updates content based on selected
        category or search query.
      </p>

      <h3 className="mt-4">💻 Technologies Used</h3>
      <ul>
        <li>React.js</li>
        <li>Bootstrap 5</li>
        <li>News API / Local Data</li>
        <li>Infinite Scroll</li>
      </ul>

      <h3 className="mt-4">🌟 Future Improvements</h3>
      <ul>
        <li>Dark Mode</li>
        <li>Bookmark Feature</li>
        <li>User Authentication</li>
        <li>Personalized News Feed</li>
      </ul>

      <hr />

      <p className="text-center mt-4">
        Built with ❤️ using React.
      </p>
    </div>
  );
};

export default About;
