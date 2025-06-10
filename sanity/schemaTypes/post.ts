import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // otomatis generate dari title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: "imageUrl",
      title: "Image URL",
      type: "url",
    }),
  ],
});
