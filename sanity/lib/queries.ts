import { defineQuery } from "next-sanity";

export const POST_QUERY =
  defineQuery(`*[_type == "post"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  content,
  imageUrl
}`);

export const POST_DETAIL_QUERY = (
  postId: string
) => `*[_type == "post" && _id == "${postId}"][0]{
  _id,
  title,
  content,
  imageUrl,
  _createdAt
}`;
