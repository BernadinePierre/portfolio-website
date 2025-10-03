interface BlogProps {
  onNavigate: (page: string) => void;
}

const articles = [
  {
    id: 1,
    title: 'Building Scalable Data Pipelines with Modern Tools',
    date: '2025-10-03',
    category: 'Data Engineering',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    snippet:
      'Exploring best practices for designing and implementing data pipelines that can handle growing data volumes while maintaining performance and reliability.',
  },
  {
    id: 2,
    title: 'From IT Support to Data Engineering: A Journey',
    date: '2025-10-02',
    category: 'Career',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    snippet:
      'Reflecting on the transition from IT support to data engineering, and how diverse experience creates stronger technical foundations for solving complex problems.',
  },
  {
    id: 3,
    title: 'Machine Learning in Production: Lessons Learned',
    date: '2025-09-10',
    category: 'Machine Learning',
    image: 'https://images.pexels.com/photos/5257456/pexels-photo-5257456.jpeg?auto=compress&cs=tinysrgb&w=600',
    snippet:
      'Key insights from deploying ML models in production environments, including monitoring, versioning, and maintaining model performance over time.',
  },
  {
    id: 4,
    title: 'The Power of Data Quality in Analytics',
    date: '2025-09-09',
    category: 'Data Quality',
    image: 'https://images.pexels.com/photos/4604639/pexels-photo-4604639.jpeg?auto=compress&cs=tinysrgb&w=600',
    snippet:
      'Understanding why data quality is the foundation of reliable insights, and practical strategies for ensuring clean, consistent data throughout your pipeline.',
  },
  {
    id: 5,
    title: 'Cloud Infrastructure for Data Engineering',
    date: '2025-06-08',
    category: 'Cloud & Infrastructure',
    image: 'https://images.pexels.com/photos/3639031//pexels-photo-3639031.jpeg?auto=compress&cs=tinysrgb&w=600',
    snippet:
      'Comparing cloud platforms and services for data engineering workloads, with focus on cost optimization, scalability, and operational efficiency.',
  },
];

export default function Blog({ onNavigate }: BlogProps) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-mono font-bold mb-12 border-b-4 border-black pb-4">
          &lt;/Blog&gt;
        </h1>

        <div className="space-y-6">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate(`BlogPost-${article.id}`)}
              className="bg-white border-l-4 border-black hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group"
            >
              <div className="md:flex">
                <div className="md:w-64 md:flex-shrink-0 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-black text-white text-xs font-mono">
                      {article.category}
                    </span>
                    <time className="text-sm text-gray-500 font-mono ml-4">{article.date}</time>
                  </div>
                  <h2 className="font-mono font-bold text-xl mb-3 group-hover:underline">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{article.snippet}</p>
                  <button className="text-black font-mono text-sm hover:underline">
                    Read more →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
