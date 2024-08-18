import React from 'react';
import Image from 'next/image';
import './homepage.css';

// Define TypeScript types for the post and props
type Post = {
  title: string;
  author: string;
  time: string;
  categories: string[];
  excerpt: string;
  quote?: string;
  image?: string;
  trending?: boolean;
};

type CategoryListProps = {
  categories: string[];
};

// Sample posts array with type annotation
const posts: Post[] = [
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
    categories: ['food', 'Melbourne', 'influencer'],
    trending: true,
    excerpt: 'sucks so bad. nyugen was lying',
  },
];

// Define the CategoryList component
const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const formattedCategories = categories.join(' • ');

  return <p>{formattedCategories}</p>;
};

// Define the HomePage component
const HomePage: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">BloggedIn</h1>
        <nav className="nav">
          <a href="#" className="nav-link">Trending</a>
          <a href="#" className="nav-link">Local</a>
          <a href="#" className="nav-link">Following</a>
          <input type="text" placeholder="Search..." className="search-input" />
        </nav>
      </header>
      <div className="maincontent">
        <div className="posts-grid">
          {posts.map((post, index) => (
            <div key={index} className="post-card">
              {post.image && (
                <div className="imagewrapper">
                  <Image src={post.image} alt={post.title} layout="fill" />
                </div>
              )}
              <h2>{post.title}</h2>
              <p className="postmeta"> -- {post.author}, {post.time}</p>
              <p className="postcategory">
                <CategoryList categories={post.categories} />
              </p>
              <p className="postexcerpt">{post.excerpt}</p>
              {post.quote && <p className="quote">{post.quote}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
