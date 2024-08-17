import React from 'react';
import React, { useState } from 'react';
const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [photos, setPhotos] = useState([]); // State to store multiple uploaded photos

  // list of topics
  const topics = ['Computer Science', 'University', 'Melbourne', 'Bubble Tea', 'Fast Food'];

  // updates the SelectedTopics array
  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handlePhotoUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const newPhotos = Array.from(event.target.files).slice(0, 5 - photos.length); // Limit to 5 photos
      const photoURLs = newPhotos.map(file => URL.createObjectURL(file));
      setPhotos([...photos, ...photoURLs]);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>BloggedIn</h1>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Trending</a>
          <a href="#" style={styles.navLink}>Local</a>
          <a href="#" style={styles.navLink}>Following</a>
          <input type="text" placeholder="Search..." style={styles.searchInput} />
        </nav>
      </header>
      <main style={styles.main}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Title/Caption..."
          style={styles.titleInput}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start blogging! The first paragraph you put will be in the preview, so think carefully..."
          style={styles.textArea}
        />
        <div style={styles.topicContainer}>
          <h3>Choose Topics (1/5)</h3>
          <div style={styles.topics}>
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => toggleTopic(topic)}
                style={{
                  ...styles.topicButton,
                  fontWeight: selectedTopics.includes(topic) ? 'bold' : 'normal',
                }}
              >
                {topic}
              </button>
            ))}
          </div>
          <input type="text" placeholder="Search topics..." style={styles.searchInput} />
        </div>
        <div style={styles.photoContainer}>
          <h3>Add Photos ({photos.length}/5)</h3>
          <label style={styles.addPhoto}>
            <span style={styles.addPhotoIcon}>+</span>
            <input
              type="file"
              style={styles.fileInput}
              onChange={handlePhotoUpload}
              multiple
              accept="image/*"
              disabled={photos.length >= 5} // Disable file input if 5 photos are already uploaded
            />
          </label>
          <div style={styles.photoPreviews}>
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Uploaded ${index + 1}`} style={styles.photoPreview} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: '28px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#000',
    fontSize: '18px',
  },
  searchInput: {
    padding: '5px',
    marginLeft: '20px',
  },
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#888',
  },
  subtitle: {
    fontSize: '16px',
    color: '#888',
    marginBottom: '20px',
  },
  topicContainer: {
    marginBottom: '30px',
  },
  topics: {
    color: '#888',
    marginBottom: '10px',
  },
  topicButton: {
    padding: '10px 15px',
    fontSize: '16px',
    color: '#000',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    margin: '5px', // Add margin to create space between buttons
  },
  photoContainer: {
    marginBottom: '30px',
  },
  addPhoto: {
    width: '50px',
    height: '50px',
    border: '2px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  },
  addPhotoIcon: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  fileInput: {
    display: 'none', // Hide the file input
  },
  photoPreviews: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  photoPreview: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
};

export default CreatePost;