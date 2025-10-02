import { ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  projectId: number;
  onNavigate: (page: string) => void;
}

const projectsData = [
  {
    id: 1,
    title: 'Natural Language Classifier with LLMs',
    shortDescription: 'ML pipeline for unstructured data insights',
    thumbnail: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=600',
    overview:
      'Developed an advanced natural language processing system leveraging large language models to classify and analyze unstructured text data. The system provides automated insights from customer feedback, support tickets, and social media content.',
    problem:
      'Organizations struggled to extract actionable insights from vast amounts of unstructured text data. Manual classification was time-consuming, inconsistent, and couldn\'t scale with growing data volumes.',
    approach:
      'Implemented a machine learning pipeline using state-of-the-art large language models with custom fine-tuning. Applied prompt engineering techniques to optimize classification accuracy for domain-specific use cases. Built automated data preprocessing workflows and validation frameworks to ensure consistent model performance.',
    tools: ['Python', 'OpenAI API', 'LangChain', 'PostgreSQL', 'Docker', 'FastAPI'],
    outcome:
      'Achieved 94% classification accuracy across multiple categories. Reduced manual review time by 78% and enabled real-time insights from unstructured data. System now processes over 50,000 documents daily with sub-second response times.',
    screenshots: [
      'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    relatedBlog: 3,
  },
  {
    id: 2,
    title: 'OLAP Data Warehouse Capstone',
    shortDescription: 'Automated ingestion + BI dashboards',
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    overview:
      'Designed and implemented a comprehensive OLAP data warehouse solution for enterprise-scale business intelligence. The system consolidates data from multiple sources, enabling complex analytical queries and interactive dashboards for stakeholders.',
    problem:
      'Business analysts spent hours manually aggregating data from disparate systems. Report generation was slow, error-prone, and couldn\'t support the complex queries needed for strategic decision-making.',
    approach:
      'Built a modern data warehouse using dimensional modeling principles (star schema). Implemented automated ETL pipelines for daily data ingestion from CRM, ERP, and marketing platforms. Optimized query performance through strategic indexing, partitioning, and materialized views. Created interactive BI dashboards with drill-down capabilities.',
    tools: ['SQL', 'PostgreSQL', 'Apache Airflow', 'dbt', 'Tableau', 'Python', 'AWS Redshift'],
    outcome:
      'Reduced report generation time from hours to seconds. Enabled self-service analytics for 200+ business users. Query performance improved by 85% through optimization techniques. Dashboard adoption increased by 120% in first quarter.',
    screenshots: [
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    relatedBlog: 5,
  },
  {
    id: 3,
    title: 'Salesforce Incident Reduction',
    shortDescription: 'Reduced recurring issues by 62% via SQL trend analysis',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    overview:
      'Led a data-driven initiative to identify and eliminate recurring system incidents in Salesforce environments. Used advanced SQL analytics to uncover root causes and implemented preventative measures that dramatically improved system reliability.',
    problem:
      'Support teams were overwhelmed with recurring incidents that consumed significant resources. Without clear visibility into patterns, the organization was reactive rather than proactive in addressing system issues.',
    approach:
      'Analyzed 18 months of incident data using SQL to identify patterns and correlations. Built automated monitoring dashboards to track incident trends in real-time. Collaborated with engineering teams to implement fixes for the most frequent issues. Created knowledge base articles and automated alerts to prevent future occurrences.',
    tools: ['SQL', 'Salesforce', 'Python', 'Tableau', 'Jira', 'Slack API'],
    outcome:
      'Reduced recurring incidents by 62% within six months. Decreased mean time to resolution (MTTR) by 45%. Freed up 30% of support team capacity for proactive improvements. Improved customer satisfaction scores by 28%.',
    screenshots: [
      'https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    relatedBlog: 4,
  },
];

export default function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => onNavigate('Portfolio')}
            className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-mono">Back to Portfolio</span>
          </button>
          <p className="text-gray-600 font-mono">Project not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate('Portfolio')}
          className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors mb-8 font-mono text-sm"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </button>

        <h1 className="text-4xl font-mono font-bold mb-6 border-b-4 border-black pb-4">
          {project.title}
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="font-mono font-bold text-xl mb-3">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{project.overview}</p>
          </section>

          <section className="bg-white border-l-4 border-black p-6">
            <h2 className="font-mono font-bold text-xl mb-3">Problem Statement</h2>
            <p className="text-gray-700 leading-relaxed">{project.problem}</p>
          </section>

          <section>
            <h2 className="font-mono font-bold text-xl mb-3">Approach & Tools</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{project.approach}</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-black text-white text-sm font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-white border-l-4 border-black p-6">
            <h2 className="font-mono font-bold text-xl mb-3">Outcome & Impact</h2>
            <p className="text-gray-700 leading-relaxed">{project.outcome}</p>
          </section>

          {project.screenshots.length > 0 && (
            <section>
              <h2 className="font-mono font-bold text-xl mb-4">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover border-2 border-gray-200"
                  />
                ))}
              </div>
            </section>
          )}

          {project.relatedBlog && (
            <section className="bg-gray-100 border-2 border-gray-300 p-6">
              <h2 className="font-mono font-bold text-lg mb-2">Related Article</h2>
              <p className="text-gray-700 mb-4">
                Read more about the technical details and lessons learned in the related blog post.
              </p>
              <button
                onClick={() => onNavigate(`BlogPost-${project.relatedBlog}`)}
                className="px-6 py-2 bg-black text-white font-mono text-sm hover:bg-gray-800 transition-colors"
              >
                Read Article
              </button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
