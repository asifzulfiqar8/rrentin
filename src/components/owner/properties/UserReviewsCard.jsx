'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample reviews data
const reviews = [
  {
    id: 1,
    name: "Micheal",
    date: "22 Jul",
    image: "/images/properties/Bg.png",
    rating: 4,
    comment:
      "I really liked the location of this rental property. The market and public transport were nearby. The house was clean, and the landlord took care of maintenance on time. The only issue was that the internet speed was a bit slow, but overall, it was a good experience!"
  },
  {
    id: 2,
    name: "Sarah",
    date: "10 Aug",
    image: "/images/properties/Bg.png",
    rating: 5,
    comment:
      "The apartment was spacious and well-lit. The security measures were impressive, making me feel safe. However, parking was limited, which was a slight inconvenience."
  },
  {
    id: 3,
    name: "John",
    date: "5 Sep",
    image: "/images/properties/Bg.png",
    rating: 3,
    comment:
      "Decent place to stay, but the noise levels were high during the night. The location was central, but the rent was slightly overpriced for the amenities offered."
  },
  // Add more reviews here...
];

function UserReviewsCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const currentReview = reviews[currentIndex];

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNext = () => {
    setIsExpanded(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setIsExpanded(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="flex flex-col mt-2 items-center border-[#D5E0F6] shadow-lg rounded-lg p-4 w-full">
      {/* User Info & Rating */}
      <div className="flex w-full flex-col lg:flex-row  items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src={currentReview.image}
            width={32}
            height={32}
            alt="User Profile"
            className="size-8 rounded-full"
          />
          <div className="flex gap-1 text-sm font-semibold">
            <span>{currentReview.name}</span> <span>-</span>{" "}
            <span>{currentReview.date}</span>
          </div>
        </div>
        {/* Star Rating */}
        <div className="flex text-[#ECBA0B]">
          {[...Array(5)].map((_, i) =>
            i < currentReview.rating ? (
              <FaStar key={i} />
            ) : (
              <FaRegStar key={i} />
            )
          )}
        </div>
      </div>

      {/* Review Comment */}
      <div className="mt-2 text-xs text-[#323232]">
        {isExpanded
          ? currentReview.comment
          : `${currentReview.comment.substring(0, 120)}...`}
      </div>

      {/* Read More Button */}
      {currentReview.comment.length > 120 && (
        <div className="flex w-full justify-end">
          <button
            onClick={toggleReadMore}
            className="text-primary text-sm mt-2 underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      )}

      {/* Navigation Arrows */}
      <div className="flex w-full justify-between mt-4">
        <button onClick={handlePrevious} className="text-primary">
          <FaChevronLeft size={20} />
        </button>
        <button onClick={handleNext} className="text-primary">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default UserReviewsCard;
