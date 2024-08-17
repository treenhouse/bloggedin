// pages/homepage.js
import React from 'react';
import Image from 'next/image';
import './homepage.css';

const posts = [
 {
 title: 'How drunk do I have to be to start coding?',
 author: 'harrison',
 time: '1:20am 16/8/24',
 category: 'Alcohol • Programming',
 excerpt: 'What the title says.',
 quote: '"at least 2 shots" -@trnhse',
 },
 {
 title: 'best banh mi inmelbourne!',
 author: 'nyugen',
 time: '9:00am 14/8/24',
 category: 'Vietnamese food •Melbourne',
 excerpt: 'hey melbourne, i think i just found the BEST banh mi place in the city on the unimelb campus...',
 quote: '"so fire omg" - @trnhse',
 },
 {
 title: 'thought daughter?',
 author: 'trnhse',
 time: '11:39pm 4/7/24',
 category: 'thought piece • brain dump',
 excerpt: 'A very demure, very mindful thought piece on the socioeconomic state of the world right now...',
 },
 {
 title: 'do NOT go to this banh mi place',
 author: 'wamni',
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

export default HomePage;