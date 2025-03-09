import { Building2, Home, Key, TrendingUp } from "lucide-react"
import {Link} from "react-router-dom"
const  ServiceSection=()=> {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-800 mb-10">Our Services</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
              We provide comprehensive real estate solutions tailored to your needs, from property acquisition and sales
              to investment consulting and market analysis, ensuring you make informed decisions in today's dynamic real
              estate market.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group overflow-hidden transition-all hover:shadow-lg rounded-lg border border-gray-200 bg-white">
            <div className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Property Sales</h3>
              <p className="mt-2 text-gray-500">Expert guidance through every step of your property sale journey.</p>
            </div>
          </div>

          <div className="group overflow-hidden transition-all hover:shadow-lg rounded-lg border border-gray-200 bg-white">
            <div className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white">
                <Key className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Property Acquisition</h3>
              <p className="mt-2 text-gray-500">
                Finding your perfect property match with personalized search services.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden transition-all hover:shadow-lg rounded-lg border border-gray-200 bg-white">
            <div className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Investment Consulting</h3>
              <p className="mt-2 text-gray-500">Strategic advice to maximize your real estate investment returns.</p>
            </div>
          </div>

          <div className="group overflow-hidden transition-all hover:shadow-lg rounded-lg border border-gray-200 bg-white">
            <div className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Property Management</h3>
              <p className="mt-2 text-gray-500">
                Comprehensive management solutions for property owners and investors.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center space-y-10 text-center  ">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl font-bold text-green-700">15+</span>
              <span className="text-sm font-medium text-gray-500">Years Experience</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl font-bold text-green-700">500+</span>
              <span className="text-sm font-medium text-gray-500">Properties Sold</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl font-bold text-green-700">98%</span>
              <span className="text-sm font-medium text-gray-500">Client Satisfaction</span>
            </div>
          </div>

          <div className="w-full max-w-md">
           <Link to='/contact-us'>
           <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700
            cursor-pointer">
              Contact Us Today
            </button>
           </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection