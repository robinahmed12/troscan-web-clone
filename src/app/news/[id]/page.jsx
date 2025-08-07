"use client";
import Container from "@/app/components/ui/Container";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const NewsDetails = ({ params }) => {
  const { id } = React.use(params);
  const [news, setNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [nextNews, setNextNews] = useState(null);
  const [secondNews, setSecondNews] = useState(null);
  const [thirdNews, setThirdNews] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(news);
  const { paragraphs } = news;

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data);
        const matched = data.find((item) => item.id == id);
        setNews(matched || {});

        // Find next news articles
        const currentIndex = data.findIndex((item) => item.id == id);
        const nextIndex = (currentIndex + 1) % data.length;
        const secondIndex = (currentIndex + 2) % data.length;
        const thirdIndex = (currentIndex + 3) % data.length;

        setNextNews(data[nextIndex]);
        setSecondNews(data[secondIndex]);
        setThirdNews(data[thirdIndex]);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div
        className="min-h-screen  flex items-center justify-center"
        style={{ backgroundColor: "rgb(248, 237, 227)" }}
      >
        <div className="flex flex-col  items-center space-y-4">
          <div
            className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent"
            style={{
              borderColor: "rgba(141, 73, 58, 0.3)",
              borderTopColor: "transparent",
            }}
          ></div>
          <p
            className="text-lg font-medium animate-pulse"
            style={{ color: "rgb(141, 73, 58)" }}
          >
            Loading article...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen mt-20"
      style={{ backgroundColor: "rgb(248, 237, 227)" }}
    >
      <Container>
        <div className="py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="max-w-7xl mx-auto mb-8">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 transform group"
              style={{ backgroundColor: "rgb(141, 73, 58)" }}
            >
              <svg
                className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Articles
            </button>
          </div>

          {/* Hero Section */}
          <div className="max-w-7xl mx-auto">
            {/* Header Section - Responsive Layout */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
              {/* Image Container */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-3xl">
                  <img
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    src={news.image}
                    alt={news.heading}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(141, 73, 58, 0.8) 0%, rgba(248, 237, 227, 0.4) 100%)",
                    }}
                  ></div>

                  {/* Floating Elements */}
                  <div className="absolute top-6 left-6">
                    <div
                      className="px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg backdrop-blur-sm"
                      style={{ backgroundColor: "rgba(141, 73, 58, 0.9)" }}
                    >
                      Featured Article
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Info */}
              <div className="w-full lg:w-2/5 space-y-6 lg:space-y-8">
                {/* Date Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <svg
                    className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "rgb(141, 73, 58)" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "rgb(141, 73, 58)" }}
                  >
                    {news.date}
                  </span>
                </div>

                {/* Headings */}
                <div className="space-y-4">
                  <h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-300 hover:opacity-80"
                    style={{ color: "rgb(141, 73, 58)" }}
                  >
                    {news.heading}
                  </h1>
                  <h2
                    className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed opacity-80"
                    style={{ color: "rgb(141, 73, 58)" }}
                  >
                    {news.subHeading}
                  </h2>
                </div>

                {/* Decorative Elements */}
                <div className="flex items-center space-x-4">
                  <div
                    className="w-16 h-1 rounded-full"
                    style={{ backgroundColor: "rgb(141, 73, 58)" }}
                  ></div>
                  <div
                    className="w-8 h-1 rounded-full opacity-60"
                    style={{ backgroundColor: "rgb(141, 73, 58)" }}
                  ></div>
                  <div
                    className="w-4 h-1 rounded-full opacity-40"
                    style={{ backgroundColor: "rgb(141, 73, 58)" }}
                  ></div>
                </div>

                {/* Reading Time */}
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 opacity-60"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "rgb(141, 73, 58)" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className="text-sm opacity-70"
                    style={{ color: "rgb(141, 73, 58)" }}
                  >
                    {paragraphs
                      ? `${Math.ceil(paragraphs.length * 0.5)} min read`
                      : "5 min read"}
                  </span>
                </div>
              </div>
            </div>

            {/* Article Content Section */}
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group border border-white/50">
                  {/* Content Header */}
                  <div
                    className="px-8 py-8 text-center relative overflow-hidden"
                    style={{ backgroundColor: "rgb(141, 73, 58)" }}
                  >
                    <div className="relative z-10">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Article Content
                      </h3>
                      <div className="w-24 h-1 bg-white/40 rounded-full mx-auto"></div>
                    </div>

                    {/* Decorative Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-12 h-12 border-2 border-white/30 rounded-full"></div>
                      <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-white/30 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/3 w-6 h-6 border border-white/20 rounded-full"></div>
                    </div>
                  </div>

                  {/* Paragraphs Container */}
                  <div className="px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
                    <div className="prose prose-lg max-w-none">
                      {paragraphs && paragraphs.length > 0 ? (
                        <div className="space-y-8">
                          {paragraphs.map((para, index) => (
                            <div
                              key={index}
                              className="transform transition-all duration-500 hover:translate-x-4 group/para cursor-default"
                            >
                              <div className="relative">
                                {/* Paragraph Number */}
                                <div
                                  className="absolute -left-8 top-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg opacity-60 group-hover/para:opacity-100 transition-all duration-300"
                                  style={{
                                    backgroundColor: "rgb(141, 73, 58)",
                                  }}
                                >
                                  {index + 1}
                                </div>

                                {/* Decorative Line */}
                                <div
                                  className="absolute -left-4 top-2 w-1 h-6 rounded-full opacity-30 group-hover/para:opacity-70 group-hover/para:h-8 transition-all duration-300"
                                  style={{
                                    backgroundColor: "rgb(141, 73, 58)",
                                  }}
                                ></div>

                                <p
                                  className="text-base sm:text-lg leading-relaxed group-hover/para:opacity-90 transition-all duration-300 pl-8"
                                  style={{ color: "rgb(141, 73, 58)" }}
                                >
                                  {para}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-16">
                          <div
                            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
                            style={{
                              backgroundColor: "rgba(248, 237, 227, 0.7)",
                            }}
                          >
                            <svg
                              className="w-10 h-10 opacity-60"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              style={{ color: "rgb(141, 73, 58)" }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <p
                            className="text-xl opacity-70"
                            style={{ color: "rgb(141, 73, 58)" }}
                          >
                            No content available for this article
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Decoration */}
                  <div
                    className="h-2 transition-all duration-500 group-hover:h-3"
                    style={{ backgroundColor: "rgb(141, 73, 58)" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Related Articles Suggestion */}
            <div className="mt-20 text-center">
              <button
                className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform group"
                style={{ backgroundColor: "rgb(141, 73, 58)" }}
              >
                <span>Explore More Articles</span>
                <svg
                  className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <div className="fixed bottom-8 right-8 z-50">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-4 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
              style={{ backgroundColor: "rgb(141, 73, 58)" }}
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>

          {/* Decorative Background Elements */}
          <div
            className="fixed top-20 left-10 w-32 h-32 rounded-full opacity-5 pointer-events-none hidden xl:block animate-pulse"
            style={{ backgroundColor: "rgb(141, 73, 58)" }}
          ></div>
          <div
            className="fixed bottom-32 right-20 w-20 h-20 rounded-full opacity-5 pointer-events-none hidden xl:block animate-pulse"
            style={{ backgroundColor: "rgb(141, 73, 58)" }}
          ></div>
        </div>

        {/* Next News Section - Add this before the closing Container div */}
        {(nextNews || secondNews || thirdNews) && (
          <div className="max-w-7xl mx-auto px-4 lg:px-5 py-20">
            <div className="flex justify-between items-center mb-10">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                Continue Reading
              </h2>
              <Link
                href="/news"
                className="text-sm font-semibold uppercase tracking-wider hover:underline"
                style={{ color: "rgb(141, 73, 58)" }}
              >
                View All News
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nextNews && (
                <Link href={`/news/${nextNews.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={nextNews.image}
                        alt={nextNews.heading}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex items-center mb-3">
                        <span
                          className="text-xs font-medium px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "rgba(141, 73, 58, 0.1)",
                            color: "rgb(141, 73, 58)",
                          }}
                        >
                          {nextNews.date}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "rgb(141, 73, 58)" }}
                      >
                        {nextNews.heading}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">
                        {nextNews.subHeading}
                      </p>
                    </div>
                  </div>
                </Link>
              )}

              {secondNews && (
                <Link href={`/news/${secondNews.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={secondNews.image}
                        alt={secondNews.heading}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex items-center mb-3">
                        <span
                          className="text-xs font-medium px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "rgba(141, 73, 58, 0.1)",
                            color: "rgb(141, 73, 58)",
                          }}
                        >
                          {secondNews.date}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "rgb(141, 73, 58)" }}
                      >
                        {secondNews.heading}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">
                        {secondNews.subHeading}
                      </p>
                    </div>
                  </div>
                </Link>
              )}

              {thirdNews && (
                <Link href={`/news/${thirdNews.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={thirdNews.image}
                        alt={thirdNews.heading}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex items-center mb-3">
                        <span
                          className="text-xs font-medium px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "rgba(141, 73, 58, 0.1)",
                            color: "rgb(141, 73, 58)",
                          }}
                        >
                          {thirdNews.date}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "rgb(141, 73, 58)" }}
                      >
                        {thirdNews.heading}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">
                        {thirdNews.subHeading}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default NewsDetails;
