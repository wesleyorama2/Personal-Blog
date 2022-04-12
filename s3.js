const s3 = require("s3-cached")({
  bucket: "personal-blog-mardowns",
  s3Options: {},
  ttl: 43200,
});

export default s3;
