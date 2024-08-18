// pages/homepage.js
import React from 'react';
import Image from 'next/image';
import './homepage.css';

const posts = [
 {
 title: 'How drunk do I have to be to start coding?',
 author: 'harrison',
 time: '1:20am 16/8/24',
 categories: ['Alcohol', 'Programming'],
 excerpt: 'What the title says.',
 quote: '"at least 2 shots" -@trnhse',
 },
 {
 title: 'best banh mi inmelbourne!',
 author: 'nyugen',
 time: '9:00am 14/8/24',
 categories: ['Vietnamese food', 'Melbourne'],
 excerpt: 'hey melbourne, i think i just found the BEST banh mi place in the city on the unimelb campus...',
 quote: '"so fire omg" - @trnhse',
 },
 {
 title: 'thought daughter?',
 author: 'trnhse',
 time: '11:39pm 4/7/24',
 categories: ['thought piece', 'brain dump'],
 excerpt: 'A very demure, very mindful thought piece on the socioeconomic state of the world right now...',
 },
 {
 title: 'do NOT go to this banh mi place',
 author: 'wammi',
 time: '5:03pm 15/8/24',
 categories: ['food','Melbourne','influencer'],
 trending: true,
 excerpt: 'sucks so bad. nyugen was lying',
 },
];

const CategoryList = ({ categories }) => {
    // Format the categories array into a string with '•' as the delimiter
    const formattedCategories = categories.join(' • ');
  
    return (
      <div>
        {formattedCategories}
      </div>
    );
  };

const HomePage = () => {
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
        <div className="maincontent">
            <div className="posts-grid">
            {posts.map((post, index) => (
                <div key={index} className="post-card">
                {post.image && (<div className="imagewrapper"> <Image src={post.image} alt={post.title} layout="fill"/> </div>)}
                <h2>{post.title}</h2>
                <p className="postmeta"> -- {post.author}, {post.time}</p>
                <p className="postcategory"> <CategoryList categories={post.categories}/> </p>
                <p className="postexcerpt">{post.excerpt}</p>
                {post.quote && <p className="quote"> {post.quote}</p>}
                </div>
            ))}
            </div>
        </div>
 </div>
 );
}


/* const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff', // Set the background color to white
        padding: '20px',
        borderRadius: '8px', // Optional: add rounded corners
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: add a subtle shadow for depth
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#fff', // Ensure header background is also white
    },
    logo: {
        fontFamily: "'Old English Text MT', serif", 
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
        border: '1px solid #ccc', // Make the border thin
        borderRadius: '4px',
        outline: 'none', // Removes the default outline when focused
    },
    main: {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#fff', // Set the background color to white
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#888',
    },
    titleInput: {
        fontSize: '64px',
        fontFamily: "ITC Cheltenham Std",
        fontWeight: 'bold',
        color: '#888',
        width: '100%',
        padding: '10px 0', // Padding only top and bottom
        marginBottom: '20px',
        textAlign: 'left',
        border: 'none', // Removes the border
        borderBottom: '2px solid #888', // Adds only a bottom border for style
        outline: 'none',
    },
    subtitle: {
        fontSize: '16px',
        color: '#888',
        marginBottom: '20px',
    },
    textArea: {
        width: '100%',
        height: '100px',
        fontSize: '16px',
        fontFamily: "Inter",
        color: '#888',
        padding: '10px 0', // Padding only top and bottom
        marginBottom: '20px',
        border: 'none', // Removes the border
        borderBottom: '2px solid #ccc', // Adds only a bottom border
        outline: 'none',
        resize: 'none', // Disable resizing
    },
    topicContainer: {
        marginBottom: '30px',
    },
    topics: {
        color: '#888',
        marginBottom: '10px',
        textAlign: 'left',
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
    postButton: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '18px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
}; */
        

export default HomePage;