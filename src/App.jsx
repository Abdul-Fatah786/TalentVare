import React from 'react';
import Header from './Components/Header';
import ProfileSection from './Components/ProfileSection';
import HeroSection from './Components/HeroSection';
import JobListing from './Components/JobListing';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
        <div className="md:col-span-1">
          <ProfileSection />
        </div>
        <div className="md:col-span-2 flex flex-col gap-4">
          <HeroSection />
          <div className="md:col-span-3 flex flex-col gap-4">
            <JobListing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;