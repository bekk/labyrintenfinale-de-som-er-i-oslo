export type ReactionData = {
  time: number;
  reactions: number;
};

const generateMockData = (): ReactionData[] => {
  const data: ReactionData[] = [];
  const totalSeconds = 45 * 60;
  const binSize = 5;
  const numBins = totalSeconds / binSize;

  for (let i = 0; i < numBins; i++) {
    data.push({
      time: i * binSize, // seconds
      reactions: Math.floor(Math.random() * 10) // 0-9 reactions randomly
    });
  }

  return data;
};

export default generateMockData;