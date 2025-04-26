import React, { useState } from 'react';
import { allSeries } from 'app/mockData/mockData';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';

// Component for displaying sentiment as a mini progress bar
const SentimentMiniBar = ({ sentiment }) => {
  return (
    <div className="flex w-full h-1.5 rounded-full overflow-hidden">
      <div 
        className="bg-emerald-500" 
        style={{ width: `${sentiment.positive}%` }}
      />
      <div 
        className="bg-gray-500" 
        style={{ width: `${sentiment.neutral}%` }}
      />
      <div 
        className="bg-rose-500" 
        style={{ width: `${sentiment.negative}%` }}
      />
    </div>
  );
};

// Card component for each series
const SeriesCard = ({ series }) => {
  let navigate = useNavigate()
  
    const navigateToAdmin = () => {
    // In a real app, this would use router navigation
    console.log(`Navigating to /admin/${series.id}`);
    // This is just for demo - would use proper navigation in real app
    navigate("/admin")
};
  
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 border border-gray-700 cursor-pointer"
      onClick={navigateToAdmin}
    >
      <div className="relative">
        <img 
          src={series.imageUrl} 
          alt={series.title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-0 right-0 bg-black bg-opacity-70 py-1 px-2 m-2 rounded text-white text-xs font-bold">
          {series.productionCompany}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{series.title}</h3>
          <div className="bg-black text-white text-sm font-bold px-2 py-1 rounded">
            {series.averageRating.toFixed(1)}
          </div>
        </div>
        
        <div className="flex items-center text-xs text-gray-400 mb-2">
          <span>{series.releaseYear}</span>
          <span className="mx-2">•</span>
          <span>{series.seasons} sesonger</span>
          <span className="mx-2">•</span>
          <span>{series.episodes} episoder</span>
        </div>
        
        <div className="flex flex-wrap mb-3">
          {series.genres.map((genre, idx) => (
            <span key={idx} className="text-xs bg-gray-700 text-gray-300 rounded-full px-2 py-1 mr-1 mb-1">
              {genre}
            </span>
          ))}
        </div>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {series.description}
        </p>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">Publikumsrespons</span>
            <span className="text-gray-400">{series.totalReviews.toLocaleString()} anmeldelser</span>
          </div>
          <SentimentMiniBar sentiment={series.overallSentiment} />
          <div className="flex justify-between mt-1 text-xs">
            <span className="text-emerald-400">{series.overallSentiment.positive}%</span>
            <span className="text-gray-400">{series.overallSentiment.neutral}%</span>
            <span className="text-rose-400">{series.overallSentiment.negative}%</span>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-6 rounded-full transition-colors">
            Se analyse
          </div>
        </div>
      </div>
    </div>
  );
};

// Filter component
const FilterBar = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', name: 'Alle' },
    { id: 'nrk', name: 'NRK' },
    { id: 'top', name: 'Toppscorede' },
    { id: 'new', name: 'Nyeste' },
    { id: 'positive', name: 'Mest positive' }
  ];
  
  return (
    <div className="flex flex-wrap mb-6 bg-gray-800 rounded-lg p-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`px-4 py-2 rounded-md text-sm font-medium mr-2 transition-colors ${
            activeFilter === filter.id 
              ? 'bg-gray-700 text-white' 
              : 'text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

// Search component
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
      <input
        type="text"
        className="bg-gray-800 text-white w-full pl-10 pr-3 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-emerald-500"
        placeholder="Søk etter TV-serier..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

// Main Page Component
const SeriesOverviewPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter and search logic
  const filteredSeries = allSeries.filter(series => {
    // Search filter
    if (searchTerm && !series.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filters
    switch (activeFilter) {
      case 'nrk':
        return series.productionCompany === 'NRK';
      case 'top':
        return series.averageRating >= 8.0;
      case 'new':
        return series.releaseYear >= 2019;
      case 'positive':
        return series.overallSentiment.positive >= 75;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar activeTab="series" />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">TV-serie sentiment analyse</h1>
          <p className="text-gray-400">Utforsk publikumsresponser på norske TV-serier</p>
        </div>
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSeries.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
        
        {filteredSeries.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg text-gray-300">Ingen TV-serier funnet</h3>
            <p className="mt-1 text-gray-400">Prøv å endre søk eller filtere.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeriesOverviewPage;