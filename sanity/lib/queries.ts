import { defineQuery } from "next-sanity";

export const POST_QUERY =
  defineQuery(`*[_type == "post"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  content,
  imageUrl,
  slug ,
  "slug": slug.current
}`);

export const POST_DETAIL_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  content,
  imageUrl,
  _createdAt,
  slug,
  "slug": slug.current
}`;
