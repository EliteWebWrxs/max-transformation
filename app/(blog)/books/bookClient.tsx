"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Download, BookOpen, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function BooksClient({ data }: { data: any }) {
  const books = data.books;
  const freeResources = data.resources;
  const testimonials = data.bookTestimonial;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-br from-sand to-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6">
            Books & Resources
          </h1>
          <p className="text-xl text-charcoal mb-8">
            Practical guides and tools to support your mindset transformation
            journey, available wherever you are.
          </p>
        </div>
      </div>

      {/* Books Section */}
      <div
        className="py-20 relative bg-fixed bg-cover bg-center bg-top bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('/diane-adams-red-2.jpg?height=1200&width=1920')`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-16 text-center">
              Published Books
            </h2>

            <div className="space-y-16">
              {books.map((book: any, index: number) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="bg-opacity-80 backdrop-blur-sm p-4 rounded-lg">
                      <Image
                        src={book.bookImageUrl}
                        alt={book.title}
                        width={300}
                        height={400}
                        className="mx-auto shadow-2xl rounded-lg"
                      />
                    </div>
                  </div>

                  <div
                    className={`${index % 2 === 1 ? "lg:col-start-1" : ""} bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-lg`}
                  >
                    <h3 className="text-3xl font-bold text-charcoal mb-2">
                      {book.title}
                    </h3>
                    <p className="text-xl text-teal mb-4">{book.subtitle}</p>

                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`${i < Math.floor(book.rating) ? "text-sand fill-current" : "text-gray-300"}`}
                            size={20}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">
                        {book.rating} ({book.reviews} reviews)
                      </span>
                    </div>

                    <p className="text-gray-700 mb-6">{book.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <BookOpen size={16} className="mr-2" />
                        {book.pages}
                      </div>
                      <div className="flex items-center">
                        <Download size={16} className="mr-2" />
                        {book.format}
                      </div>
                    </div>

                    {/* <ul className="space-y-2 mb-8">
                      {book.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul> */}

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-charcoal">
                        {book.price}
                      </span>
                      <Link
                        href={book.redirectLink}
                        className="bg-teal text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center"
                      >
                        Order Now
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Free Resources */}
      {freeResources.length > 1 && (
        <div
          className="py-20 bg-gray-50 relative bg-fixed bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9))`,
          }}
        >
          <AnimatedSection className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-16 text-center">
                Free Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {freeResources.map((resource: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center border border-white border-opacity-50"
                  >
                    <div className="bg-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Download size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">
                      {resource.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{resource.description}</p>
                    <p className="text-sm text-teal font-semibold mb-6">
                      {resource.type}
                    </p>
                    <Link
                      href={resource.pdfUrl}
                      className="bg-sand text-charcoal px-6 py-3 rounded-full hover:bg-gold transition-all duration-300 inline-flex items-center"
                    >
                      Download Free
                      <Download className="ml-2" size={16} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      )}

      {/* Testimonials */}
      <div
        className="py-20 relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-16 text-center">
              What Readers Are Saying
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial: any, index: number) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-95 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white border-opacity-50"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-sand fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="font-semibold text-charcoal">
                    {testimonial.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* CTA */}
      <div
        className="py-20 bg-gradient-to-r from-navy to-charcoal text-white relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 32, 56, 0.8), rgba(45, 55, 72, 0.8))`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Start Your Transformation Today
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Get your copy of these life-changing books and begin your journey
              to unshakeable confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://amazon.com"
                className="bg-sand text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-gold transition-all duration-300 flex items-center justify-center"
              >
                Order Your Books
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
