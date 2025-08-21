import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import appriciation1 from "../assets/Award of appreciation.jpg";
import firstAward from "../assets/First Lego League East Africa, 2019.png";
import secondAward from "../assets/2nd Award.jpg";
import appreciation2 from "../assets/Award of appreciation (1).jpg";
// Define the Award type
interface Award {
  id: number;
  name: string;
  image: string;
  description: string;
}

const AwardsTestimonialsPage = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "STEM Educator",
      content:
        "Abugida Robotics has transformed how we teach technology. Their programs are engaging, educational, and truly inspire students to pursue STEM careers.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Parent",
      content:
        "My daughter's confidence has soared since joining the robotics program. She's now talking about becoming an engineer!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "School Principal",
      content:
        "The impact on our students' problem-solving skills and creativity has been remarkable. This program is worth every investment.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    },
  ];

  // Awards data
  const awards: Award[] = [
    {
      id: 1,
      name: "Innovation Excellence Award 2023",
      image: firstAward,
      description: "Recognized for outstanding innovation in STEM education",
    },
    {
      id: 2,
      name: "Best Robotics Program 2023",
      image: secondAward,
      description: "Awarded for the most comprehensive robotics curriculum",
    },
    {
      id: 3,
      name: "Community Impact Award",
      image: appriciation1,
      description:
        "For making robotics education accessible to underserved communities",
    },
    {
      id: 4,
      name: "Excellence in Education 2023",
      image: appreciation2,
      description: "Recognizing exceptional contributions to student learning",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedAward, setSelectedAward] = useState<Award | null>(null); // Properly typed

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gradient-to-br from-gray-900 to-blue-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Recognition & Testimonials
          </h1>
          <p className="text-blue-200 text-lg">
            Celebrating our achievements and hearing from our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section: Testimonials */}
          <div className="bg-gray-400 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              What People Say
            </h2>

            <div className="relative bg-gray-900/50 rounded-xl p-6 mb-6 min-h-[500px] flex flex-col justify-center">
              <div className="text-white text-lg italic mb-6">
                "{testimonials[currentTestimonial].content}"
              </div>

              <div className="flex items-center">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-300 text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>

              {/* Quote marks decoration */}
              <div className="absolute top-4 left-4 text-6xl text-blue-500/20">
                "
              </div>
              <div className="absolute bottom-4 right-4 text-6xl text-blue-500/20">
                "
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <ChevronLeft className="text-white" />
              </button>
              <div className="flex items-center space-x-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-blue-500 w-6"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <ChevronRight className="text-white" />
              </button>
            </div>
          </div>

          {/* Right Section: Awards Shelf */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Our Awards
            </h2>

            {/* Shelf */}
            <div className="relative mb-8">
              <div className="bg-amber-800 h-4 rounded-t-lg"></div>
              <div className="bg-amber-900 h-2"></div>

              {/* Awards grid */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                {awards.map((award) => (
                  <div key={award.id} className="relative group">
                    {/* Glass cover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-blue-600/20 backdrop-blur-sm rounded-lg transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0 z-10 border border-white/10">
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
                        Hover to view
                      </div>
                    </div>

                    {/* Award frame */}
                    <div className="bg-gradient-to-br from-amber-800 to-amber-900 p-4 rounded-lg shadow-xl">
                      <div className="bg-black p-2 rounded border-2 border-amber-600">
                        <img
                          src={award.image}
                          alt={award.name}
                          className="w-full h-40 object-contain rounded"
                        />
                      </div>

                      {/* Award info that appears on hover */}
                      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-white font-semibold text-sm">
                          {award.name}
                        </h3>
                        <p className="text-blue-200 text-xs">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shelf bottom */}
            <div className="bg-amber-900 h-6 rounded-b-lg shadow-lg"></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-600/10 rounded-full blur-xl"></div>
      </div>

      {/* Award Modal - Now properly typed */}
      {selectedAward && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-xl font-semibold">
                {selectedAward.name}
              </h3>
              <button
                onClick={() => setSelectedAward(null)}
                className="text-white hover:text-blue-400"
              >
                <X size={24} />
              </button>
            </div>
            <img
              src={selectedAward.image}
              alt={selectedAward.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-blue-200">{selectedAward.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardsTestimonialsPage;
