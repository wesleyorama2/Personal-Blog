import s3 from "../s3";
import matter from "gray-matter";
var hljs = require("highlight.js"); // https://highlightjs.org/
var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (e) {
        console.log(e);
      }
    }

    return ""; // use external default escaping
  },
});

export async function getStaticProps() {
  const decoder = new TextDecoder("utf8");
  const byteFile = await s3.getGzipObjectCached(`about.md.gz`);
  const blogFile = decoder.decode(byteFile);
  const { data: frontmatter, content } = matter(blogFile);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function About({ frontmatter, content }) {
  return (
    /* jshint ignore:start */
    <div className="prose mx-auto max-w-fit px-10 py-6 mt-20 bg-white rounded-lg shadow-md shadow-indigo-500/50 border-1">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
    /* jshint ignore:end */
  );
}
