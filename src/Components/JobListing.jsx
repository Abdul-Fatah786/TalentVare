import React, { useState } from "react";
import { Bookmark } from "lucide-react";

export default function JobListing() {
  const [savedJobs, setSavedJobs] = useState([]);
  const tabs = ["FrontEnd", "Backend", "Graphic Designer"];

  const toggleSave = (jobId) => {
    setSavedJobs(prev =>
      prev.includes(jobId)
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  // Generate unique jobs with different IDs
  const featuredJobs = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    title: "UI/UX Designer",
    location: "Seatle, San Francisco, CA",
    timePosted: "1 day ago",
    applicants: 22,
  }));

  const recommendedJobs = Array.from({ length: 5 }, (_, index) => ({
    id: index + 6,
    title: "UI/UX Designer",
    location: "Seatle, San Francisco, CA",
    timePosted: "1 day ago",
    applicants: 22,
  }));

  return (
    <div className="p-4 md:px-8">
      <div className="flex items-center gap-4 p-2 rounded-md">
        <span className="text-gray-500 text-sm whitespace-nowrap">Similar:</span>
        <div className="flex gap-2 overflow-x-auto pb-2"> 
          {tabs.map((tab, index) => (
            <button
              key={index}
              className="px-3 py-1 rounded-md text-sm border border-gray-400 text-gray-500 whitespace-nowrap"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <JobSection
        title="Featured Jobs"
        titleString="See Featured Jobs"
        jobs={featuredJobs}
        savedJobs={savedJobs}
        onToggleSave={toggleSave}
      />
      <JobSection
        title="Recommended Jobs"
        titleString="See Recommended Jobs"
        jobs={recommendedJobs}
        savedJobs={savedJobs}
        onToggleSave={toggleSave}
      />
    </div>
  );
}

function JobSection({ title, titleString, jobs, savedJobs, onToggleSave }) {
  return (
    <div className="mb-8">
      <div className="flex justify-start items-center mb-4 gap-2">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <a href="#" className="text-[#0154AA] text-sm underline">
          {titleString}
        </a>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 pr-4">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isSaved={savedJobs.includes(job.id)}
              onToggleSave={() => onToggleSave(job.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function JobCard({ job, isSaved, onToggleSave }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-w-[280px] md:w-64 flex-shrink-0">
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-white">
            <img src="data:image/jpeg;base64,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"
              alt="Microsoft Teams Logo"
              className="w-6 h-6" />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-sm">{job.title}</h3>
            <p className="text-gray-500 text-xs">Teams</p>
          </div>
        </div>
        <p className="text-gray-600 text-xs mb-3">{job.location}</p>

        <div className="flex items-center text-xs text-gray-500 mb-4">
          <span>{job.timePosted}</span>
          <span className="mx-1">|</span>
          <span>{job.applicants} applicants</span>
        </div>

        <div className="flex justify-between items-center gap-2 flex-col sm:flex-row">
          <button className="w-full sm:w-auto bg-[#0154AA] text-white py-2 px-4 rounded-md text-sm">
            Apply Now
          </button>
          <button
            onClick={onToggleSave}
            className="text-gray-400 hover:text-gray-600 ml-2"
          >
            <Bookmark className="w-5 h-5" fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </div>
  );
}