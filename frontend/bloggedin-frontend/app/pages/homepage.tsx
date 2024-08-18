import React from 'react';
import Image from 'next/image';
import styles from './homepage.module.css'; // Assuming you are using CSS Modules

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

  return <p className={styles.categoryList}>{formattedCategories}</p>;
};

// Separate posts into two columns based on their index
const PostTable = () => {
    const leftColumnPosts = posts.filter((_, index) => index % 2 === 0);
    const rightColumnPosts = posts.filter((_, index) => index % 2 !== 0);
  
    return (
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
          <td style={{ verticalAlign: 'top', width: '15%' }}></td>
            <td style={{ verticalAlign: 'top', width: '35%' }}>
            <ul>
                {leftColumnPosts.map((post, index) => (
                  <li key={index} className={styles.postCard}>
                  {post.image && (
                      <div className={styles.imageWrapper}>
                      <Image src={post.image} alt={post.title}/>
                      </div>
                  )}
                  <h2 className={styles.title}>{post.title}</h2>
                  <p className={styles.postMeta}> -- {post.author}, {post.time}</p>
                  <div className={styles.postCategory}>
                      <CategoryList categories={post.categories} />
                  </div>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  {post.quote && <p className={styles.quote}>{post.quote}</p>}
                  </li>
                ))}
              </ul>
            </td>
            <td style={{ verticalAlign: 'top', width: '35%' }}>
              <ul>
              {rightColumnPosts.map((post, index) => (
                <li key={index} className={styles.postCard}>
                {post.image && (
                    <div className={styles.imageWrapper}>
                    <Image src={post.image} alt={post.title} />
                    </div>
                )}
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.postMeta}> -- {post.author}, {post.time}</p>
                <div className={styles.postCategory}>
                    <CategoryList categories={post.categories} />
                </div>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                {post.quote && <p className={styles.quote}>{post.quote}</p>}
                </li>
            ))}
              </ul>
            </td>
            <td style={{ verticalAlign: 'top', width: '15%' }}></td>
          </tr>
        </tbody>
      </table>
    );
};

// Define the HomePage component
const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>BloggedIn</h1>
        <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>Trending</a>
            <a href="#" className={styles.navLink}>Local</a>
            <a href="#" className={styles.navLink}>Following</a>
            <div className={styles.search}>
                <input type="text" placeholder="Search..." className={styles.searchInput}/>
                <Image
                    className={styles.icon}
                    src="/public/search.svg"  // Path to the image file
                    alt="search icon"  // Alt text for accessibility
                    width={500}  // Desired width of the image
                    height={300}  // Desired height of the image
                />
            </div>
            <Image
                className={styles.icon}
                src="/public/more.svg"  // Path to the image file
                alt="more icon"  // Alt text for accessibility
                width={500}  // Desired width of the image
                height={300}  // Desired height of the image
            />
        </nav>
      </header>

      <div className={styles.mainContent}>
        <PostTable/>
      </div>
    </div>
  );
};

export default HomePage;
