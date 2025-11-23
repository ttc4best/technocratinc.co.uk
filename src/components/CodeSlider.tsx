export default function CodeSlider() {
  const codeSnippets = [
    {
      language: 'TypeScript',
      code: `interface User {
  id: string;
  name: string;
  email: string;
}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      language: 'React',
      code: `const App = () => {
  const [state, setState] = useState();
  return <Component />;
}`,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      language: 'CSS',
      code: `.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}`,
      color: 'from-teal-500 to-green-500'
    },
    {
      language: 'JavaScript',
      code: `const fetchData = async () => {
  const response = await fetch('/api');
  return response.json();
}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      language: 'Node.js',
      code: `app.get('/api', (req, res) => {
  res.json({ message: 'Hello' });
});`,
      color: 'from-emerald-500 to-lime-500'
    },
    {
      language: 'SQL',
      code: `SELECT users.name, orders.total
FROM users
JOIN orders ON users.id = orders.user_id;`,
      color: 'from-lime-500 to-yellow-500'
    },
    {
      language: 'Python',
      code: `def process_data(data):
    result = [x * 2 for x in data]
    return result`,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      language: 'GraphQL',
      code: `query GetUser($id: ID!) {
  user(id: $id) {
    name
    email
  }
}`,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="relative py-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>

      <div className="flex animate-marquee">
        <div className="flex items-center gap-6 pr-6 flex-shrink-0">
          {codeSnippets.map((snippet, index) => (
            <div
              key={index}
              className="group relative w-80 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${snippet.color} rounded-t-2xl`}></div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {snippet.language}
                </span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
              </div>

              <pre className="text-sm text-slate-300 font-mono leading-relaxed whitespace-pre-wrap">
                <code>{snippet.code}</code>
              </pre>

              <div className={`absolute inset-0 bg-gradient-to-r ${snippet.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 pr-6 flex-shrink-0" aria-hidden="true">
          {codeSnippets.map((snippet, index) => (
            <div
              key={`duplicate-${index}`}
              className="group relative w-80 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${snippet.color} rounded-t-2xl`}></div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {snippet.language}
                </span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
              </div>

              <pre className="text-sm text-slate-300 font-mono leading-relaxed whitespace-pre-wrap">
                <code>{snippet.code}</code>
              </pre>

              <div className={`absolute inset-0 bg-gradient-to-r ${snippet.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
