import React from "react";
import {
  Target,
  Users,
  Building,
  Heart,
  ArrowRight,
  BookOpen,
  Star,
  Zap,
} from "lucide-react";
import stemhero from "../assets/stemhero.jpg";
import stem1 from "../assets/stem-1.jpg";
import stem2 from "../assets/stem-2.jpg";
import stem3 from "../assets/stem-3.jpg";
import stem4 from "../assets/stem-4.jpg";
import stem5 from "../assets/stem-5.jpg";
import stem6 from "../assets/stem-6.jpg";
import stem7 from "../assets/stem-7.jpg";

const GSTEMPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      {/* Section 1: Hero with Text and Image */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-purple-100 dark:bg-gray-800 text-purple-600 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Zap className="mr-2" size={16} />
                G-STEM Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Empowering the Next Generation of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Women in STEM
                </span>
              </h1>
            </div>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg">
              <p>
                At Abugida Robotics and Technology Center, we believe that every
                young mind has the potential to unlock the wonders of science,
                technology, engineering, and mathematics (STEM). That's why
                we've created our signature program, G-STEM, to inspire and
                empower the next generation of female innovators.
              </p>

              <p>
                Through hands-on workshops, interactive projects, and immersive
                experiences, our G-STEM program ignites the curiosity and
                passion of girls in our community. Led by our exceptional team
                of STEM mentors, these future leaders embark on a journey of
                discovery, uncovering the endless possibilities that lie within
                the realms of robotics, coding, and cutting-edge technology.
              </p>

              <p>
                Imagine a world where young girls not only dream of changing the
                world, but actively shape it with their limitless ingenuity.
                That's the vision of G-STEM – to shatter the glass ceiling, one
                brilliant mind at a time, and empower our students to become the
                trailblazers of tomorrow.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                Join G-STEM
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={stemhero}
                alt="Girls learning STEM"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Image Gallery */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              G-STEM in Action
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              See our future innovators exploring, creating, and discovering the
              wonders of STEM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[stem1, stem2, stem3, stem4, stem5, stem6, stem7].map(
              (image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={image}
                    alt={`G-STEM activity ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-semibold">STEM Learning</h3>
                      <p className="text-sm">Girls exploring technology</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Support Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Support Girls in STEM
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Help us empower the next generation of female leaders in science,
              technology, engineering, and math.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Sponsor a Girl */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart
                  className="text-purple-600 dark:text-purple-300"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Sponsor a Girl
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Make a monthly donation to support a girl's education in STEM.
              </p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Sponsor a Girl
              </button>
            </div>

            {/* Card 2: Sponsor a Class */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-pink-100 dark:bg-pink-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-pink-600 dark:text-pink-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Sponsor a STEM Class
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Support an entire class of girls in STEM with a one-time
                donation.
              </p>
              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300">
                Sponsor a Class
              </button>
            </div>

            {/* Card 3: Corporate Sponsorship */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building
                  className="text-blue-600 dark:text-blue-300"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Corporate Sponsorship
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Become a corporate sponsor and support our STEM initiatives for
                girls.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Become a Corporate Sponsor
              </button>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                500+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Girls Empowered
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                25+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Workshops</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Schools Reached
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                98%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTEMPage;
