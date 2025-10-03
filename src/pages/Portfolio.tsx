interface PortfolioProps {
  onNavigate: (page: string) => void;
}

const projects = [
  {
    id: 1,
    title: 'Natural Language Classifier with LLMs',
    description: 'ML pipeline for unstructured data insights',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Python', 'OpenAI API', 'LangChain', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'OLAP Data Warehouse Capstone',
    description: 'Automated ingestion + BI dashboards',
    thumbnail: 'https://images.pexels.com/photos/14956306/pexels-photo-14956306.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['SQL', 'PostgreSQL', 'Apache Airflow', 'Tableau'],
  },
  {
    id: 3,
    title: 'Salesforce Incident Reduction',
    description: 'Reduced recurring issues by 62% via SQL trend analysis',
    thumbnail: 'https://images.pexels.com/photos/7948063/pexels-photo-7948063.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['SQL', 'Salesforce', 'Python', 'Tableau'],
  },
];

export default function Portfolio({ onNavigate }: PortfolioProps) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-mono font-bold mb-12 border-b-4 border-black pb-4">
          &lt;/Portfolio&gt;
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onNavigate(`Project-${project.id}`)}
              className="bg-white border-2 border-gray-200 hover:border-black transition-colors cursor-pointer group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="font-mono font-bold text-xl mb-2 group-hover:underline">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-mono">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
