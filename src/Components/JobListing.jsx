import React, { useState } from "react";
import { Bookmark } from "lucide-react";

export default function JobListing() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [savedJobs, setSavedJobs] = useState([]);

  const tabs = ["Finder", "Featured", "Recent", "Saved/Starred"];

  const featuredJobs = Array(5).fill({
    id: 1,
    title: "UI/UX Designer",
    company: "Tesla",
    location: "San Francisco, CA",
    timePosted: "1 day ago",
    applicants: 23,
    saved: false,
  });

  const recommendedJobs = Array(5).fill({
    id: 6,
    title: "UI/UX Designer",
    company: "Tesla",
    location: "San Francisco, CA",
    timePosted: "1 day ago",
    applicants: 23,
    saved: false,
  });

  const toggleSaveJob = (jobId) => {
    setSavedJobs((prevSavedJobs) =>
      prevSavedJobs.includes(jobId)
        ? prevSavedJobs.filter((id) => id !== jobId)
        : [...prevSavedJobs, jobId]
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="flex space-x-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md text-sm ${activeTab === tab ? "bg-white border border-gray-200 shadow-sm" : "text-gray-500 hover:bg-gray-100"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <JobSection title="Featured Jobs" jobs={featuredJobs} savedJobs={savedJobs} toggleSaveJob={toggleSaveJob} />
      <JobSection title="Recommended Jobs" jobs={recommendedJobs} savedJobs={savedJobs} toggleSaveJob={toggleSaveJob} />
    </div>
  );
}

function JobSection({ title, jobs, savedJobs, toggleSaveJob }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">{title}</h2>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          See {title}
        </a>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-4">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              isSaved={savedJobs.includes(job.id)}
              onToggleSave={() => toggleSaveJob(job.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function JobCard({ job, isSaved, onToggleSave }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 w-64 flex-shrink-0">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white">
            <span className="text-xs">Logo</span>
          </div>
        </div>

        <h3 className="font-medium text-sm mb-1">{job.title}</h3>
        <p className="text-gray-600 text-xs mb-1">{job.company}</p>
        <p className="text-gray-600 text-xs mb-3">{job.location}</p>

        <div className="flex items-center text-xs text-gray-500 mb-4">
          <span>{job.timePosted}</span>
          <span className="mx-1">|</span>
          <span>{job.applicants} applicants</span>
        </div>

        <div className="flex justify-between items-center">
          <button className="w-full bg-[#0154AA] text-white py-1.5 px-3 rounded-md text-sm hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
          <button onClick={onToggleSave} className="text-gray-400 hover:text-gray-600">
            {isSaved ? <Bookmark className="w-5 h-5 fill-current" /> : <Bookmark className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
