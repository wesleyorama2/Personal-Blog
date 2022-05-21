const s3 = require("s3-cached")({
  bucket: "personal-blog-mardowns",
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_BLOG,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_BLOG
  },
  ttl: 43200,
});

export default s3;
