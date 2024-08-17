// pages/homepage.js
import React from 'react';
import Image from 'next/image';

const posts = [
 {
 title: 'How drunk do I have to be to start coding?',
 author: 'harrison',
 time: '1:20am 16/8/24',
 category: 'Alcohol • Programming',
 excerpt: 'What the title says.',
 quote: '"at least 2 shots" -@trnhse',
 //image: '/coding_drunk_book_cover.png',
 },
 {
 title: 'best banh mi in melbourne!',
 author: 'nyugen',
 time: '9:00am 14/8/24',
 category: 'Vietnamese food •Melbourne',
 excerpt:
 'hey melbourne, i think i just found the BEST banh mi place in the city on the unimelb campus...',
 quote: '"so fire omg" - @trnhse',
 //image: '/banhmi.png',
 },
 {
 title: 'thought daughter?',
 author: 'trnhse',
 time: '11:39pm 4/7/24',
 category: 'thought piece • brain dump',
 excerpt:
 'A very demure, very mindful thought piece on the socioeconomic state of the world right now...',
 },
 {
 title: 'do NOT go to this banh mi place',
 author: 'wamMi',
 time: '5:03pm 15/8/24',
 category: 'food • Melbourne • influencer',
 trending: true,
 excerpt: 'sucks so bad. nyugen was lying',
 },
];

const HomePage = () => {
 return (
    <div className="container">
        <nav className="navbar">
            <h1>BloggedIn</h1>
            <div className="nav-links">
                <a href="#">Trending</a>
                <a href="#">Local</a>
                <a href="#">Following</a>
            </div>
            <input type="text" placeholder="Search" className="search"/>
        </nav>
 <div className="maincontent">
 <div className="posts-grid">
 {posts.map((post, index) => (
    <div key={index} className="post-card">
    {post.image && (<div className="imagewrapper"> <Image src={post.image} alt={post.title} layout="fill"/> </div>)}
    <h2>{post.title}</h2>
    <p className="postmeta"> -- {post.author}, {post.time}</p>
    <p className="postcategory">{post.category}</p>
    <p className="postexcerpt">{post.excerpt}</p>
    {post.quote && <p className="quote"> {post.quote}</p>}
    </div>
 ))}
 </div>
 </div>
 </div>
 );
}
// CSS (Can be placed in the same file or an external stylesheet)
export const styles = `
.container {
 display: flex;
 flex-direction: column;
 height: 100vh;
}
.navbar {
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: #333;
 padding: 10px;
 color: #fff;
}
.navbar h1 {
 font-family: 'Old English Text MT',
serif;
 margin: 0;
}
.nav-links a {
 color: white;
 text-decoration: none;
 margin-right: 15px;
}
.nav-links {
 flex: 1;
 display: flex;
 justify-content: center;
}
.search {
 border: 1px solid #ccc;
 border-radius: 4px;
 padding: 5px;
}
.main-content {
 flex: 1;
 display: flex;
 justify-content: center;
 padding: 20px;
 background-color: #f4f4f4;
}
.posts-grid {
 display: grid;
 grid-template-columns:
repeat(auto-fill, minmax(300px,
1fr));
 gap: 20px;
 max-width: 1200px;
 width: 100%;
}
.post-card {
 background: #fff;
 padding: 20px;
 border-radius: 5px;
 box-shadow: 0 2px 5px rgba(0, 0,
0, 0.1);
 position: relative;
}
.image-wrapper {
 width: 100%;
 height: 200px;
 position: relative;
}
.post-meta {
 font-style: italic;
 color: #777;
}
.post-category {
 font-weight: bold;
}
.quote {
 color: #cc0000;
 font-weight: bold;
 margin-top: 10px;
}
`;

export function getServerSideProps() {
    return { props: { styles } };
}

export default HomePage;