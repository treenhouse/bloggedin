import React from 'react';

const CreatePost = () => {
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
        <h2 style={styles.title}>Add Title/Caption...</h2>
        <p style={styles.subtitle}>
          Start blogging! The first paragraph you put will be in the preview, so think carefully...
        </p>
        <div style={styles.topicContainer}>
          <h3>Choose Topics (1/5)</h3>
          <p style={styles.topics}>
            Related Topic • <i>Related Topic</i> • <i>Related Topic</i> • <i>Related Topic</i> • <i>Related Topic</i>
          </p>
          <input type="text" placeholder="Search..." style={styles.searchInput} />
        </div>
        <div style={styles.photoContainer}>
          <h3>Add Photos (0/5)</h3>
          <div style={styles.addPhoto}>
            <span style={styles.addPhotoIcon}>+</span>
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
};

export default CreatePost;