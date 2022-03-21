import Image from 'next/image';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
    const files = fs.readdirSync('projectPosts');
    const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`projectPosts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      
      return {
        slug,
        frontmatter,
      };
    });
  return {
    props: {
      posts,
    },
    };
  }

export default function Project({ posts }) {
    return (
      /* jshint ignore:start */
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col bg-white'
          >
            <Link href={`/projects/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={frontmatter.socialImage}
                />
                <h1 className='p-4'>{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
      /* jshint ignore:end */
    );
  }