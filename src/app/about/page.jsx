import React from "react";
import Container from "../components/ui/Container";
import Image from "next/image";

const page = () => {
  return (
    <>
      {/* Custom background color using your palette */}
      <div
        className="min-h-screen"
        style={{ backgroundColor: "rgb(248, 237, 227)" }}
      >
        <Container>
          <section>
            {/* Hero Section */}
            <div className="mt-8 lg:mt-14">
              <div className="text-center mb-8 lg:mb-16">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                  style={{ color: "rgb(141, 73, 58)" }}
                >
                  Crafting Timeless <br className="hidden sm:block" />
                  <span className="block mt-2">Spaces with Style</span>
                </h1>

                <div className="w-full mt-10 max-w-6xl mx-auto">
                  <Image
                    src="/about img/img-1.jpeg"
                    alt="About Troscan - Premium Furniture Design"
                    width={1200}
                    height={600}
                    className="w-full h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover rounded-2xl lg:rounded-3xl shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Our Approach Section */}
            <div className="mt-40">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="space-y-4">
                    <h4
                      className="text-lg md:text-xl font-semibold tracking-wide uppercase"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Our Approach
                    </h4>
                    <h2
                      className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      A Vision Shaped by{" "}
                      <span className="block">Elegance and Expertise</span>
                    </h2>
                  </div>

                  <div
                    className="space-y-4 text-base mt-24 md:text-lg leading-relaxed"
                    style={{ color: "rgb(141, 73, 58)" }}
                  >
                    <p className="opacity-90">
                      We believe every space should tell a story that reflects
                      its unique personality and the people who inhabit it.
                    </p>
                    <p className="opacity-90">
                      With a thoughtful and intentional approach, we design
                      spaces that exude balance, harmony, and authenticity. Our
                      process is collaborative and meticulous, grounded in the
                      philosophy that true beauty lies in the subtle details
                      that make a space feel like home.
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <Image
                      src="/about img/img-2.jpeg"
                      alt="About Troscan - Premium Furniture Design"
                      width={500}
                      height={350}
                      className="w-full h-full md:h-80 lg:h-[600px] object-cover rounded-2xl lg:rounded-3xl shadow-xl"
                      priority
                    />
                    {/* Decorative overlay */}
                    <div
                      className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl lg:rounded-3xl -z-10 opacity-30"
                      style={{ backgroundColor: "rgba(248, 237, 227, 0.7)" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="mt-40 lg:mt-40">
              <div className="text-center mb-12 lg:mb-20">
                <h4
                  className="text-lg md:text-xl font-semibold tracking-wide uppercase mb-4"
                  style={{ color: "rgb(141, 73, 58)" }}
                >
                  Our Team
                </h4>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  style={{ color: "rgb(141, 73, 58)" }}
                >
                  Meet the Visionaries <br className="hidden sm:block" />
                  Behind Troscán
                </h2>
              </div>

              {/* Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/about img/ZkiObwy3gtgUC1r32SlsIZYE.jpeg"
                      alt="Liam Bennett - Lead Furniture Designer"
                      width={517}
                      height={300}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3
                      className="text-xl lg:text-2xl font-bold mb-2"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Sophia Turner
                    </h3>
                    <p
                      className="text-sm lg:text-base opacity-80 mb-6"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Interior Stylist
                    </p>
                    <button
                      className="px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      style={{
                        backgroundColor: "rgb(248, 237, 227)",
                        color: "rgb(141, 73, 58)",
                        
                      }}
                     
                    >
                      Contact
                    </button>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/about img/iy4Yjrt6EfSEVReGjIS5qf5vc.jpeg"
                      alt="Liam Bennett - Lead Furniture Designer"
                      width={517}
                      height={300}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3
                      className="text-xl lg:text-2xl font-bold mb-2"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Ethan Wright
                    </h3>
                    <p
                      className="text-sm lg:text-base opacity-80 mb-6"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Client Experience Manage
                    </p>
                     <button
                      className="px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      style={{
                        backgroundColor: "rgb(248, 237, 227)",
                        color: "rgb(141, 73, 58)",
                        
                      }}
                     
                    >
                      Contact
                    </button>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/about img/or08AT1s7Gsd7r3cBxIPClE1qXo.jpeg"
                      alt="Liam Bennett - Lead Furniture Designer"
                      width={517}
                      height={300}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3
                      className="text-xl lg:text-2xl font-bold mb-2"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Liam Bennett
                    </h3>
                    <p
                      className="text-sm lg:text-base opacity-80 mb-6"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Lead Furniture Designer
                    </p>
                     <button
                      className="px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      style={{
                        backgroundColor: "rgb(248, 237, 227)",
                        color: "rgb(141, 73, 58)",
                        
                      }}
                     
                    >
                      Contact
                    </button>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/about img/qLpYxt2t3D25n4MxgyGnnbOX2o.jpeg"
                      alt="Liam Bennett - Lead Furniture Designer"
                      width={517}
                      height={300}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3
                      className="text-xl lg:text-2xl font-bold mb-2"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                     Isabella Reed
                    </h3>
                    <p
                      className="text-sm lg:text-base opacity-80 mb-6"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Lighting Specialist
                    </p>
                     <button
                      className="px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      style={{
                        backgroundColor: "rgb(248, 237, 227)",
                        color: "rgb(141, 73, 58)",
                        
                      }}
                     
                    >
                      Contact
                    </button>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/about img/VHjVat8amQI84VmcuqK0CulTk4.jpeg"
                      alt="Liam Bennett - Lead Furniture Designer"
                      width={517}
                      height={300}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3
                      className="text-xl lg:text-2xl font-bold mb-2"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Emma Collins
                    </h3>
                    <p
                      className="text-sm lg:text-base opacity-80 mb-6"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Creative Director
                    </p>
                    <button
                      className="px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2"
                      style={{
                        backgroundColor: "rgb(141, 73, 58)",
                        color: "rgb(255, 255, 255)",
                        borderColor: "rgb(141, 73, 58)",
                      }}
                      
                    >
                      Contact
                    </button>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/about img/6x4VB4KCen6shYoZmn4SlxHHg.jpeg"
                      alt="Liam Bennett - Lead Furniture Designer"
                      width={517}
                      height={300}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3
                      className="text-xl lg:text-2xl font-bold mb-2"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                     Oliver Harris
                    </h3>
                    <p
                      className="text-sm lg:text-base opacity-80 mb-6"
                      style={{ color: "rgb(141, 73, 58)" }}
                    >
                      Space Planner
                    </p>
                    <button
                      className="px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2"
                      style={{
                        backgroundColor: "rgb(141, 73, 58)",
                        color: "rgb(255, 255, 255)",
                        borderColor: "rgb(141, 73, 58)",
                      }}
                     
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-20 lg:mt-32 text-center">
              <div
                className="bg-white/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-16 shadow-xl"
                style={{ backgroundColor: "rgba(248, 237, 227, 0.7)" }}
              >
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                  style={{ color: "rgb(141, 73, 58)" }}
                >
                  Ready to Transform Your Space?
                </h3>
                <p
                  className="text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto"
                  style={{ color: "rgb(141, 73, 58)" }}
                >
                  Let's collaborate to create a space that tells your unique
                  story with elegance and authenticity.
                </p>
                 <button
                      className="px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      style={{
                        backgroundColor: "rgb(248, 237, 227)",
                        color: "rgb(141, 73, 58)",
                        
                      }}
                     
                    >
                      Contact
                    </button>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

export default page;
