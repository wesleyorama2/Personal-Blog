import Image from "next/image";
import matter from "gray-matter";
import Link from "next/link";
import s3 from "../s3.js";

export async function getStaticProps() {
  const blogsFiles = await s3.getKeysCached("project-");
  delete blogsFiles["continuationToken"];
  delete blogsFiles["isTruncated"];
  const keyArray = blogsFiles.map((i) => i.Key);

  const decoder = new TextDecoder("utf8");

  const bufferArray = await Promise.all(
    keyArray.map((blogBytes) => s3.getGzipObjectCached(blogBytes))
  );

  const posts = bufferArray
    .map((byteFile) => decoder.decode(byteFile))
    .map((file) => {
      const { data: frontmatter } = matter(file);
      const slug = frontmatter.filename.replace(".md.gz", "");
      return {
        frontmatter,
        slug,
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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col bg-white"
        >
          <Link href={`/projects/${slug}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={frontmatter.socialImage}
              />
              <h1 className="p-4">{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
    /* jshint ignore:end */
  );
}
