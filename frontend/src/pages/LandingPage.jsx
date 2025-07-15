
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Data from '../Mock/Data';

const URLShortenerLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navigation />

      <Hero />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make link management effortless and secure
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Data.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default URLShortenerLanding;