import { defineField, defineType } from "sanity";

export default defineType({
  name: "freeResource",
  title: "Free Resource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    }),
    defineField({
      name: "file",
      title: "PDF File",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    }),
  ],
});
