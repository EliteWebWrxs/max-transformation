import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

export const heroQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
    content,
    ${postFields}
  }
`);

export const moreStoriesQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content,
    ${postFields}
  }
`);

export const testimonials = defineQuery(`*[_type == "programTestimonial"]{
  name,
  role,
  content,
  rating
}`);

export const booksAndResources = defineQuery(`
{
  "books": *[_type == "book"] | order(order asc) {
    title,
    order,
    description,
    price,
    format,
    pages,
    rating,
    reviews,
    features,
    redirectLink,
    "bookImageUrl": bookImage.asset->url
  },
  "resources": *[_type == "freeResource"] | order(title asc) {
    title,
    description,
    type,
    "pdfUrl": file.asset->url
  },
  "bookTestimonial": *[_type == "bookTestimonial"] | order(_createdAt desc) {
    name,
    content,
    rating
  }
}
`);
