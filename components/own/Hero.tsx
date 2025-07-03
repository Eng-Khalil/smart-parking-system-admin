"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";

const carouselItems = [
  {
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2000&auto=format&fit=crop",
    title: "Financial Security for",
    subtitle: "Your Future",
    description:
      "BUTSACCO provides trusted financial services for teachers and community members. Join us to secure your financial future with our savings and loan solutions.",
    tag: "Community Banking",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2000&auto=format&fit=crop",
    title: "Empowering Teachers with",
    subtitle: "Financial Freedom",
    description:
      "Our specialized savings and loan products are designed to meet the unique needs of educators, helping them achieve their financial goals.",
    tag: "Success Story",
    story:
      "\"BUTSACCO helped me secure funding for my children's education. Now they're both in university!\" - Jane Namara, Teacher",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2000&auto=format&fit=crop",
    title: "Building Communities through",
    subtitle: "Economic Growth",
    description:
      "We believe in the power of community-based financial solutions to create sustainable economic development and prosperity for all.",
    tag: "Success Story",
    story:
      '"My small business has grown from 1 to 10 employees thanks to BUTSACCO\'s business loan program." - John Mugisha, Entrepreneur',
  },
];

export default function BUTSACCOHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Carousel slides */}
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            {/* Background image with gradient overlay */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out"
                style={{
                  backgroundImage: `url(${item.image})`,
                  transform:
                    index === currentSlide ? "scale(1.05)" : "scale(1)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2e7d32]/95 via-[#2e7d32]/80 to-transparent"></div>

              {/* Decorative elements - behind text */}
              <div className="absolute bottom-0 right-0 w-1/3 h-40 sm:h-48 md:h-56 lg:h-64 bg-[red]/20 hidden sm:block rounded-tl-[60px] sm:rounded-tl-[80px] md:rounded-tl-[100px] backdrop-blur-sm z-0"></div>
              <div className="absolute top-16 sm:top-20 right-6 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-[#e8f5e9]/10 backdrop-blur-sm z-0"></div>

              {/* Bottom gradient - kept above decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
            </div>

            {/* Content - increased z-index to be above backdrop blurs */}
            <div className="container relative z-20 h-full flex flex-col justify-center px-4 sm:px-6">
              <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
                {item.tag && (
                  <div className="inline-block mb-2 sm:mb-3 md:mb-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium">
                    {item.tag}
                  </div>
                )}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
                  {item.title}
                  <span className="inline-block bg-gradient-to-r from-white/90 to-white/70 text-[#2e7d32] px-2 sm:px-3 md:px-4 mt-1 sm:mt-2 rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    {item.subtitle}
                  </span>
                </h1>
                <p className="mt-2 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xs sm:max-w-sm md:max-w-lg">
                  {item.description}
                </p>
                {item.story && (
                  <div className="mt-2 sm:mt-4 md:mt-6 bg-white/10 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg border-l-2 sm:border-l-4 border-white max-w-xs sm:max-w-sm md:max-w-lg">
                    <p className="text-white/90 italic text-xs sm:text-sm md:text-base">
                      {item.story}
                    </p>
                  </div>
                )}
                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex flex-wrap gap-2 sm:gap-4">
                  <Button
                    size={isMobile ? "sm" : isTablet ? "default" : "lg"}
                    className="bg-white text-[#2e7d32] hover:bg-white/90 rounded-full text-xs sm:text-sm md:text-base"
                    asChild
                  >
                    <Link href="/loanform.pdf">Download Loan Form</Link>
                  </Button>
                  <Button
                    size={isMobile ? "sm" : isTablet ? "default" : "lg"}
                    variant="outline"
                    className="border-white   hover:bg-white/10 rounded-full text-xs sm:text-sm md:text-base"
                  >
                    Join BUTSACCO{" "}
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows - increased z-index */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 text-white/75 hover:text-white transition-colors bg-black/20 hover:bg-black/30 rounded-full p-1 sm:p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 text-white/75 hover:text-white transition-colors bg-black/20 hover:bg-black/30 rounded-full p-1 sm:p-2"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide indicators - increased z-index */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-30 flex justify-center space-x-1 sm:space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-4 sm:w-6 md:w-8"
                : "bg-white/50 w-1.5 sm:w-2"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
}
