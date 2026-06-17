function Services() {
    const services = [
      {
        title: "Full Stack Development",
        description:
          "Modern websites and web applications using React, Node.js and MongoDB.",
        icon: "💻",
      },
      {
        title: "AI Integrations",
        description:
          "AI chatbots, automations and smart business solutions.",
        icon: "🤖",
      },
      {
        title: "Dashboard Development",
        description:
          "Admin panels, analytics dashboards and business management systems.",
        icon: "📊",
      },
      {
        title: "SaaS Applications",
        description:
          "Scalable SaaS products with authentication, payments and APIs.",
        icon: "🚀",
      },
    ];
  
    return (
      <section
        id="services"
        className="py-24 bg-[#050816] text-white"
      >
        <div className="max-w-7xl mx-auto px-8">
  
          <h2 className="text-4xl font-bold text-center mb-4">
            Services
          </h2>
  
          <p className="text-gray-400 text-center mb-16">
            Solutions I build for startups and businesses
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-white/5
                  border
                  border-purple-500/20
                  rounded-2xl
                  p-6
                  hover:border-purple-500
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div className="text-5xl mb-4">
                  {service.icon}
                </div>
  
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
  
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
  
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;