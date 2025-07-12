import { defineField, defineType } from "sanity";

export default defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string", // use 'number' if you prefer numeric prices
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
    }),
    defineField({
      name: "pages",
      title: "Pages",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: "reviews",
      title: "Number of Reviews",
      type: "number",
    }),
    defineField({
      name: "redirectLink",
      title: "Redirect Link",
      type: "string",
    }),
    defineField({
      name: "bookImage",
      title: "Book Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
  ],
});
