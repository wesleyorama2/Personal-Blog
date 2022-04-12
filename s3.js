const s3 = require("s3-cached")({
  bucket: "personal-blog-mardowns",
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  ttl: 43200,
});

export default s3;
