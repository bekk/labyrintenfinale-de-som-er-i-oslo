import React, { useState } from 'react';
import { LineChart, BarChart, Line, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot, ReferenceLine, PieChart, Pie } from 'recharts';

// Component for displaying sentiment as a progress bar
const SentimentBar = ({ sentiment }) => {
  return (
    <div className="flex h-3 overflow-hidden rounded">
      <div 
        className="bg-emerald-500" 
        style={{ width: `${sentiment.positive}%` }}
        title={`Positiv: ${sentiment.positive}%`}
      />
      <div 
        className="bg-gray-500" 
        style={{ width: `${sentiment.neutral}%` }}
        title={`Nøytral: ${sentiment.neutral}%`}
      />
      <div 
        className="bg-rose-500" 
        style={{ width: `${sentiment.negative}%` }}
        title={`Negativ: ${sentiment.negative}%`}
      />
    </div>
  );
};

// Keywords pill component
const KeywordPill = ({ keyword, sentiment }) => {
  const bgColor = sentiment === 'positive' ? 'bg-emerald-700' : 
                  sentiment === 'negative' ? 'bg-rose-700' : 'bg-gray-700';
  
  return (
    <span className={`px-2 py-1 ${bgColor} text-gray-100 rounded-full text-xs mr-1 mb-1 inline-block font-medium transition-colors duration-200 hover:opacity-90`}>
      {keyword}
    </span>
  );
};

const SKAMAnalysisPage = () => {
  // Episode information
  const episode = {
    id: 1,
    season: 1,
    episodeNumber: 1,
    title: "Du ser ut som en slut",
    airDate: "2015-09-25",
    viewerCount: 152000,
    commentCount: 3421,
    sentiment: {
      positive: 68,
      neutral: 24,
      negative: 8
    },
    topKeywords: [
      { word: "OMG", count: 312, sentiment: "positive" },
      { word: "søt", count: 257, sentiment: "positive" },
      { word: "lol", count: 231, sentiment: "positive" },
      { word: "Eva", count: 198, sentiment: "neutral" },
      { word: "cringe", count: 167, sentiment: "negative" },
      { word: "Elsker", count: 143, sentiment: "positive" },
      { word: "haha", count: 129, sentiment: "positive" },
      { word: "Noora", count: 112, sentiment: "neutral" },
      { word: "real", count: 96, sentiment: "positive" },
      { word: "Pepsi Max gjengen", count: 84, sentiment: "neutral" }
    ]
  };
  
  // Generate mock reaction data for the timeline
  const generateTimelineData = () => {
    // Episode duration in minutes
    const duration = 24;
    
    // Generate points every minute
    const points = [];
    let currentTime = 0;
    let reactionCount = 0;
    
    // Key moments in the episode
    const keyMoments = [
      { time: 2, label: "Eva går til skolen", type: "start" },
      { time: 5, label: "Jonas og Eva på badet", type: "high" },
      { time: 8, label: "Eva møter Noora", type: "change" },
      { time: 12, label: "Lunsjsamtale", type: "normal" },
      { time: 16, label: "Konfrontasjon med Pepsi Max-gjengen", type: "climax" },
      { time: 18, label: "Eva på festen", type: "high" },
      { time: 21, label: "Eva og Jonas krangler", type: "low" },
      { time: 23, label: "Sluttscene", type: "end" }
    ];
    
    while (currentTime <= duration) {
      // Base reaction count
      reactionCount = 20 + Math.floor(Math.random() * 40);
      
      // Increase reactions at key moments
      const keyMoment = keyMoments.find(moment => moment.time === currentTime);
      
      if (keyMoment) {
        // Boost reaction count for key moments
        switch (keyMoment.type) {
          case 'climax':
            reactionCount += 200 + Math.floor(Math.random() * 100);
            break;
          case 'high':
            reactionCount += 100 + Math.floor(Math.random() * 50);
            break;
          case 'low':
            reactionCount += 80 + Math.floor(Math.random() * 40);
            break;
          case 'change':
            reactionCount += 60 + Math.floor(Math.random() * 30);
            break;
          default:
            reactionCount += 40 + Math.floor(Math.random() * 20);
        }
      }
      
      points.push({
        time: currentTime,
        reactions: reactionCount,
        marker: keyMoment
      });
      
      // Increment time by 1 minute
      currentTime += 1;
    }
    
    return points;
  };

  // Generate reaction type data with emojis
  const reactionTypeData = [
    { name: "❤️ Kjærlighet", count: 893, color: "#ec4899" }, 
    { name: "👍 Bra innhold", count: 726, color: "#4ade80" },
    { name: "😂 Morsomt", count: 234, color: "#facc15" },
    { name: "😮 Sjokkert", count: 412, color: "#a855f7" },
    { name: "😭 Trist", count: 164, color: "#3b82f6" },
    { name: "🤔 Forvirret", count: 92, color: "#f97316" },
    { name: "😴 Kjedelig", count: 230, color: "#64748b" },
    { name: "😡 Sint", count: 674, color: "#ef4444" }
  ];
  
  // Get timeline data
  const timelineData = generateTimelineData();
  
  // Format time for display
  const formatTime = (minutes) => {
    return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
  };

  // Format date in Norwegian style
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('no-NO', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  // Create sentiment summary
  const sentimentSummary = (sentiment) => {
    if (sentiment.positive > 60) return "svært positiv";
    if (sentiment.positive > 50) return "generelt positiv";
    if (sentiment.negative > 60) return "svært negativ";
    if (sentiment.negative > 50) return "generelt negativ";
    return "blandet";
  };

  return (
    <>
    {/* NavBar */}
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo & static nav links */}
      <div className="flex items-center space-x-2">
        <div className="h-8 w-auto">
        <svg viewBox="0 0 24 24" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="currentColor" 
              d="M4,2h16a2,2,0,0,1,2,2V20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2M4,4V20H20V4H4m2,2h12v12H6V6m2,2v8h8V8H8m2,2h4v4H10V10"
            />
          </svg>
        </div>
        <div className="h-8 w-auto">
          <h1 className="text-xl font-bold">Labyrinten Consulting & Analysis</h1>
        </div>
        <ul className="flex ml-8 space-x-6">
        </ul>
      </div>
    </nav>


    <div className="bg-gray-900 text-white min-h-screen p-2">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-2">SKAM Seeranalyse</h1>
        <div className="flex items-center text-gray-400 mb-2">
          <span className="mr-4">S{episode.season}E{episode.episodeNumber}: {episode.title}</span>
          <span className="mr-4">•</span>
          <span>Sendt: {formatDate(episode.airDate)}</span>
          <span className="mr-4 ml-4">•</span>
          <span>{episode.viewerCount.toLocaleString()} seere</span>
          <span className="mr-4 ml-4">•</span>
          <span>{episode.commentCount.toLocaleString()} chat-meldinger</span>
        </div>
        <div className="h-1 w-full bg-indigo-600 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto p-1">
        <h1 className="text-4xl font-bold">
          Reaksjons analyse
        </h1>
      </div>

      {/* Timeline Graph - Simplified */}
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Tidslinje for seerengasjement</h2>
        <p className="text-gray-400 text-sm mb-4">Antall reaksjoner gjennom episoden</p>
        <p className="text-gray-400 text-md mb-4"> Dominant følelse: ❤️ Kjærlighet</p>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timelineData} margin={{ top: 20, right: 20, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis 
                dataKey="time" 
                stroke="#888" 
                tickFormatter={(value) => formatTime(value)}
                ticks={[0, 5, 10, 15, 20]}
                label={{ value: 'Episodetid (time:min)', position: 'insideBottomRight', offset: -5, fill: '#888' }}
              />
              <YAxis 
                stroke="#888" 
                label={{ value: 'Antall reaksjoner', angle: -90, position: 'insideLeft', fill: '#888' }}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                formatter={(value, name) => [`${value} reaksjoner`, 'Seerengasjement']}
                labelFormatter={(value) => `Tid: ${formatTime(value)}`}
              />
              
              <Line 
                type="monotone" 
                dataKey="reactions" 
                stroke="#4f46e5" 
                strokeWidth={2} 
                dot={true}
                activeDot={{ r: 6, fill: '#fff', stroke: '#333' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Reactions Bar Graph */}
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Seerreaksjoner</h2>
        <p className="text-gray-400 text-sm mb-4">Fordeling av emoji-reaksjoner</p>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={reactionTypeData} 
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                formatter={(value) => [`${value} reaksjoner`, '']}
              />
              <Bar dataKey="count">
                {reactionTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold">
          Sentimentanalyse
        </h1>
      </div>

      {/* Analysis Section - Switched positions */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Keyword Analysis - Now first */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Nøkkelordanalyse</h2>
          <p className="text-gray-400 text-sm mb-4">Mest populære temaer i kommentarer</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nøkkelord</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Antall</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Stemning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {episode.topKeywords.map((keyword, idx) => {
                  const sentimentText = keyword.sentiment === 'positive' ? 'positiv' : 
                                       keyword.sentiment === 'negative' ? 'negativ' : 'nøytral';
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-white">{keyword.word}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{keyword.count}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${keyword.sentiment === 'positive' ? 'bg-green-100 text-green-800' : 
                            keyword.sentiment === 'negative' ? 'bg-red-100 text-red-800' : 
                            'bg-gray-100 text-gray-800'}`}>
                          {sentimentText}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Overall Sentiment - Now second */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Stemningsanalyse</h2>
          <p className="text-gray-400 text-sm mb-4">Fordeling av stemning i kommentarer</p>
          
          <div className="mb-4">
            <SentimentBar sentiment={episode.sentiment} />
            <div className="flex mt-2 text-xs justify-between">
              <span className="text-emerald-400 font-medium">{episode.sentiment.positive}% Positiv</span>
              <span className="text-gray-400 font-medium">{episode.sentiment.neutral}% Nøytral</span>
              <span className="text-rose-400 font-medium">{episode.sentiment.negative}% Negativ</span>
            </div>
          </div>
          
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Positiv', value: episode.sentiment.positive, color: '#10B981' },
                    { name: 'Nøytral', value: episode.sentiment.neutral, color: '#6B7280' },
                    { name: 'Negativ', value: episode.sentiment.negative, color: '#F43F5E' }
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {[
                    { name: 'Positiv', value: episode.sentiment.positive, color: '#10B981' },
                    { name: 'Nøytral', value: episode.sentiment.neutral, color: '#6B7280' },
                    { name: 'Negativ', value: episode.sentiment.negative, color: '#F43F5E' }
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                  formatter={(value) => [`${value}%`, '']}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Footer with comment summary */}
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Sammendrag av publikumskommentarer</h2>
        <p className="text-gray-300 mb-4">
          Kommentaranalysen for SKAM S1E1 "Du ser ut som en slut" viser en {sentimentSummary(episode.sentiment)} mottakelse fra publikum.
          Seerne var spesielt engasjert under konfrontasjonsscenen med Pepsi Max-gjengen, med reaksjonstall som nådde toppen på dette tidspunktet.
          Vanlige temaer i kommentarene inkluderer diskusjoner om vennskapsdynamikk, sosiale hierarkier i videregående skole og tenåringsfestkultur.
        </p>
        <p className="text-gray-300">
          Mange seere uttrykte nostalgi for sine egne videregående-opplevelser, samtidig som de kunne relatere til Evas kamp for å finne sin identitet.
          Den autentiske skildringen av norsk tenåringsliv ble ofte rost, med {episode.topKeywords[0].word} og {episode.topKeywords[1].word} 
          som de mest omtalte temaene. Denne episoden etablerte grunnlaget for serien med {episode.sentiment.positive}% av kommentarene 
          som uttrykte positive følelser.
        </p>
      </div>
    </div>
    </>
  );
};

export default SKAMAnalysisPage;