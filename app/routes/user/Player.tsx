import { useEffect, useRef, useState } from "react";
import { 
  randomUsers,
  randomChatMessages,
  randomComments,
  initialChatMessages,
  initialComments
} from "/app/components/Comments/StreamComments.js";

export default function NRKStreamingDemo() {
  const [chatMessages, setChatMessages] = useState(initialChatMessages);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [newChatMessage, setNewChatMessage] = useState("");
  const [reactionClicked, setReactionClicked] = useState(null);
  const videoRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Function to get a random item from array
  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  // Function to add a random chat message
  const addRandomChatMessage = () => {
    const randomUser = getRandomItem(randomUsers);
    const randomMessage = getRandomItem(randomChatMessages);
    setChatMessages(prevMessages => [...prevMessages, { user: randomUser, message: randomMessage }]);
  };

  // Function to add a random comment
  const addRandomComment = () => {
    const randomUser = getRandomItem(randomUsers);
    const randomComment = getRandomItem(randomComments);
    setComments(prevComments => [...prevComments, { user: randomUser, comment: randomComment }]);
  };

  // Set up intervals for random messages and comments
  useEffect(() => {
    // Add random chat messages every 2-6 seconds
    const chatInterval = setInterval(() => {
      addRandomChatMessage();
    }, 1000);
    
    // // Add random comments every 5-15 seconds
    // const commentInterval = setInterval(() => {
    //   addRandomComment();
    // }, 5000 + Math.random() * 10000);
    
    // Clean up intervals on unmount
    return () => {
      clearInterval(chatInterval);
      // clearInterval(commentInterval);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedMetadata = () => {
        const duration = videoRef.current.duration;
        const randomStart = duration * (0.1 + Math.random() * 0.3);
        videoRef.current.currentTime = randomStart;
        videoRef.current.play().catch((e) => console.error("Autoplay prevented", e));
      };

      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { user: "Du", comment: newComment }]);
      setNewComment("");
    }
  };

  const handleChatSubmit = () => {
    if (newChatMessage.trim()) {
      setChatMessages([...chatMessages, { user: "Du", message: newChatMessage }]);
      setNewChatMessage("");
    }
  };

  const handleReaction = (emoji) => {
    setReactionClicked(emoji);
    setTimeout(() => {
      setReactionClicked(null);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg md:col-span-3">
            <video
              ref={videoRef}
              src="/app/components/video/videoplayback.mp4"
              muted
              autoPlay
              playsInline
              className="w-full aspect-video object-cover rounded-2xl"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-2 py-1 rounded">
              DIREKTE
            </div>
          </div>

          <div className="bg-neutral-800 rounded-2xl shadow-md p-4 h-[500px] overflow-y-auto md:col-span-1 flex flex-col">
            <h2 className="font-semibold text-lg mb-4">Live Chat</h2>
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className="flex items-start space-x-2 mb-2">
                  <div className="font-bold text-sm text-blue-400">{msg.user}:</div>
                  <div className="text-sm text-neutral-300">{msg.message}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Send en melding..."
                value={newChatMessage}
                onChange={(e) => setNewChatMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleChatSubmit();
                }}
                className="flex-1 border border-neutral-700 bg-neutral-700 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleChatSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Reaction */}
        <div className="flex justify-center space-x-4 my-6">
          {[ '❤️', '👍', '😂', '😮', '😭', '🤔', '😴', '😡',].map((emoji) => (
            <button
              key={emoji}
              onClick={() => handleReaction(emoji)}
              className={`text-5xl transition transform ${reactionClicked === emoji ? 'scale-150 rotate-12' : 'hover:scale-125'} duration-300 ease-out`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}