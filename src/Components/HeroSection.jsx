import React from "react";
import { Search, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-2xl font-semibold">
          Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Explore the latest job openings and apply for the best opportunities available today!
        </p>

        <div className="flex flex-col md:flex-row gap-3 bg-white p-3 rounded-md shadow-sm">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Job Title, Company, or Keywords
            </label>
            <input
              id="search"
              type="text"
              placeholder="Job Title, Company, or Keywords"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:w-48">
            <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700">
              <span>Select Location</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          <div className="md:w-36">
            <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700">
              <span>Job Type</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          <button className="bg-[#0154AA] text-white px-6 py-2 rounded-md flex items-center ">
            <Search className="h-4 w-4 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}