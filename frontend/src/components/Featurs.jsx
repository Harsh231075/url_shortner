import React from 'react'
import Data from '../Mock/Data';
function feature() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text  bg-gradient-to-r from-indigo-600 to-purple-600">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Powerful features designed to make link management effortless and secure
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Data.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-100"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>

                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default feature;