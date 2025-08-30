import React from "react";
import {
  ShoppingCart,
  Star,
  Zap,
  Shield,
  Calendar,
  MessageCircle,
  Rocket,
  Gift,
  Heart,
} from "lucide-react";

const RoboticsShopPage = () => {
  const kidsRobots = [
    {
      id: 1,
      name: "Abugida Beginner Robotics Kit",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Designed for kids above the age of 8 and any tech enthusiast who wants to learn the basics of robotics. Perfect for beginners!",
      price: "Birr 1,500",
      age: "8+ Years",
      rating: 4.9,
      reviews: 128,
      features: [
        "Easy Assembly",
        "Colorful Components",
        "Educational Fun",
        "Safe Materials",
      ],
      learningBenefits: [
        "STEM Skills",
        "Creativity",
        "Problem Solving",
        "Logical Thinking",
      ],
      telegramLink: "https://t.me/yourtelegram",
    },
    {
      id: 2,
      name: "Junior Explorer Robot",
      image:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "A friendly robot that teaches coding basics through fun adventures and games.",
      price: "Birr 2,200",
      age: "6+ Years",
      rating: 4.7,
      reviews: 89,
      features: [
        "Voice Activated",
        "Game Based Learning",
        "Parent App",
        "Durable Design",
      ],
      learningBenefits: [
        "Coding Basics",
        "Motor Skills",
        "Pattern Recognition",
        "Sequence Learning",
      ],
      telegramLink: "https://t.me/yourtelegram",
    },
    {
      id: 3,
      name: "Creative Builder Set",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Build multiple robot models with this expandable construction set. Grow with your child's skills!",
      price: "Birr 1,800",
      age: "7+ Years",
      rating: 4.8,
      reviews: 156,
      features: [
        "100+ Pieces",
        "Multiple Models",
        "Expandable",
        "Storage Case",
      ],
      learningBenefits: [
        "Engineering Concepts",
        "Spatial Awareness",
        "Fine Motor Skills",
        "Creativity",
      ],
      telegramLink: "https://t.me/yourtelegram",
    },
    {
      id: 4,
      name: "Coding Critters",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Adorable animal robots that introduce programming through storytelling and play.",
      price: "Birr 1,300",
      age: "5+ Years",
      rating: 4.6,
      reviews: 204,
      features: [
        "Storybook Included",
        "Colorful Characters",
        "Simple Commands",
        "Interactive Play",
      ],
      learningBenefits: [
        "Early Coding",
        "Storytelling",
        "Social Skills",
        "Emotional Development",
      ],
      telegramLink: "https://t.me/yourtelegram",
    },
    {
      id: 5,
      name: "Science Discovery Kit",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Combine robotics with science experiments for a complete STEM learning experience.",
      price: "Birr 2,500",
      age: "9+ Years",
      rating: 4.9,
      reviews: 97,
      features: [
        "Experiment Cards",
        "Real Sensors",
        "Data Recording",
        "Project Journal",
      ],
      learningBenefits: [
        "Scientific Method",
        "Data Analysis",
        "Observation Skills",
        "Experiment Design",
      ],
      telegramLink: "https://t.me/yourtelegram",
    },
    {
      id: 6,
      name: "Robo-Pet Companion",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "A friendly robotic pet that responds to touch and voice commands. Perfect for young learners!",
      price: "Birr 1,100",
      age: "4+ Years",
      rating: 4.5,
      reviews: 312,
      features: [
        "Voice Responsive",
        "Touch Sensors",
        "Emotional Reactions",
        "Dance Moves",
      ],
      learningBenefits: [
        "Empathy",
        "Cause & Effect",
        "Verbal Skills",
        "Social Interaction",
      ],
      telegramLink: "https://t.me/yourtelegram",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Rocket className="mr-2" size={16} />
            Kids Robotics Shop
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Fun Learning Robots for Kids!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Discover educational robots that make STEM learning exciting and
            engaging for children of all ages
          </p>
        </div>

        {/* Features Banner */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield
                  className="text-blue-600 dark:text-blue-300"
                  size={24}
                />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                Child-Safe
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Non-toxic materials
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gift
                  className="text-green-600 dark:text-green-300"
                  size={24}
                />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                Educational
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                STEM learning
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart
                  className="text-purple-600 dark:text-purple-300"
                  size={24}
                />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                Parent Approved
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                100% satisfaction
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap
                  className="text-yellow-600 dark:text-yellow-300"
                  size={24}
                />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                Easy Setup
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Ready to play
              </p>
            </div>
          </div>
        </div>

        {/* Robots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kidsRobots.map((robot) => (
            <div
              key={robot.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={robot.image}
                  alt={robot.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Age Badge */}
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {robot.age}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(robot.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
                      {robot.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {robot.reviews} reviews
                  </span>
                </div>

                {/* Name and Description */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {robot.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {robot.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-2">
                    Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {robot.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learning Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-2">
                    Teaches:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {robot.learningBenefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs px-2 py-1 rounded"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Buy Button */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    {robot.price}
                  </div>

                  <a
                    href={robot.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Highlight for Abugida Kit */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Featured: Abugida Beginner Kit
              </h2>
              <p className="text-blue-100 mb-4">
                Perfect for kids above 8 years old! Our best-selling robotics
                kit designed specifically for young learners in Ethiopia.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Designed for Ethiopian educational standards</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Local language support materials</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Perfect for schools and home learning</span>
                </li>
              </ul>
              <div className="text-3xl font-bold mb-4">Birr 1,500</div>
              <a
                href="https://t.me/yourtelegram"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <MessageCircle size={18} className="mr-2" />
                Order on Telegram
              </a>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Abugida Robotics Kit"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Parent from Addis Ababa",
                text: "My 9-year-old loves the Abugida kit! He's learning so much about technology while having fun.",
                rating: 5,
              },
              {
                name: "School Teacher",
                text: "Perfect for our STEM classroom. The kids are engaged and learning real robotics concepts.",
                rating: 5,
              },
              {
                name: "Mother of two",
                text: "Both my children (8 and 10) enjoy building and programming together. Great family activity!",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsShopPage;
