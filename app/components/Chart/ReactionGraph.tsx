import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import generateMockData from './mockData';

type ReactionData = {
  time: number;
  reactions: number;
};

const ReactionGraph = () => {
  const data: ReactionData[] = generateMockData();

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="time" 
            tickFormatter={(time: number) => `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}

            label={{ value: "Time (mm:ss)", position: "insideBottomRight", offset: -5 }}
          />
          <YAxis label={{ value: 'Reactions', angle: -90, position: 'insideLeft' }}/>
          <Tooltip 
            formatter={(value: number, name: string) => [`${value} reactions`, name]}
            labelFormatter={(label: number) => `Time: ${Math.floor((label as number) / 60)}:${((label as number) % 60).toString().padStart(2, '0')}`}
          />
          <Line type="monotone" dataKey="reactions" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReactionGraph;
