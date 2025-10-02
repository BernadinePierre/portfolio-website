import { ArrowLeft, Linkedin, Github } from 'lucide-react';

interface BlogPostProps {
  postId: number;
  onNavigate: (page: string) => void;
}

const blogPostsData = [
  {
    id: 1,
    title: 'Building Scalable Data Pipelines with Modern Tools',
    date: '2024-03-15',
    category: 'Data Engineering',
    image: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `
Data pipelines are the backbone of modern data infrastructure. As organizations generate more data than ever, the need for robust, scalable pipelines has become critical. In this article, I'll share best practices and lessons learned from building production-grade data pipelines.

## The Foundation: Architecture Matters

A well-designed data pipeline architecture considers three key factors: scalability, maintainability, and reliability. Start with a clear understanding of your data sources, transformation requirements, and downstream consumers.

I recommend a modular approach where each component has a single responsibility. This makes debugging easier and allows teams to iterate on individual pieces without disrupting the entire pipeline.

## Choosing the Right Tools

The modern data stack offers countless options. For orchestration, Apache Airflow provides flexibility and a robust ecosystem. For transformations, dbt has revolutionized how we think about data modeling with its SQL-first approach.

When selecting tools, consider:
- Team expertise and learning curve
- Community support and documentation
- Integration capabilities with existing systems
- Cost at scale

## Handling Data Quality

Data quality issues are inevitable. The question is how quickly you can detect and resolve them. Implement data validation at multiple stages: at ingestion, during transformation, and before loading to final destinations.

Great expectations and similar frameworks allow you to codify quality checks and integrate them into your pipeline workflows. This proactive approach prevents bad data from propagating downstream.

## Monitoring and Observability

You can't improve what you don't measure. Implement comprehensive monitoring covering:
- Pipeline execution time and success rates
- Data volume and schema changes
- Resource utilization (CPU, memory, network)
- Cost metrics for cloud resources

Set up alerts for anomalies, but be strategic to avoid alert fatigue. Focus on actionable metrics that indicate real problems.

## Performance Optimization

As data volumes grow, performance optimization becomes crucial. Key strategies include:
- Partitioning large datasets by date or other logical divisions
- Using appropriate data formats (Parquet, ORC) for analytical workloads
- Implementing incremental processing rather than full refreshes
- Leveraging distributed processing frameworks like Spark when needed

## Conclusion

Building scalable data pipelines is both an art and a science. Start with solid architectural principles, choose tools thoughtfully, and prioritize data quality from day one. Most importantly, build with monitoring and maintainability in mind – your future self will thank you.
    `,
  },
  {
    id: 2,
    title: 'From IT Support to Data Engineering: A Journey',
    date: '2024-02-28',
    category: 'Career',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `
Career transitions are rarely linear. My journey from IT support to data engineering taught me that diverse experience creates unexpected advantages in technical problem-solving.

## The IT Support Foundation

My career began in IT support, troubleshooting user issues and maintaining systems. While some might see this as unrelated to data engineering, the skills I developed proved invaluable:

**Problem-solving under pressure** – Support teaches you to diagnose issues quickly with limited information. This translates directly to debugging data pipeline failures.

**User empathy** – Understanding end-user needs helps build better data products. Technical excellence means nothing if stakeholders can't use your outputs.

**Systems thinking** – Supporting enterprise software requires understanding how components interconnect. This holistic view is essential for designing data architectures.

## The Transition Spark

My transition began when I noticed patterns in the support tickets I was handling. Recurring issues suggested underlying system problems, but I lacked tools to analyze them systematically.

I started teaching myself SQL to query our incident database. Those first queries – clumsy and inefficient – revealed insights that manual review couldn't surface. I was hooked.

## Building Technical Skills

The learning curve was steep. I spent evenings and weekends:
- Working through SQL courses and practicing with real datasets
- Learning Python for data manipulation and automation
- Understanding database design and normalization
- Exploring ETL concepts and data pipeline architectures

Online courses helped, but the real learning came from applying concepts to actual problems. I volunteered for any project involving data, even if it wasn't officially part of my role.

## Making the Leap

After two years of learning and proving value through data projects, I transitioned into a junior data engineer role. The support background gave me credibility – I understood the systems and could communicate with both technical and non-technical stakeholders.

## Lessons Learned

**Diverse experience is an asset** – Don't discount previous roles. Each experience adds unique perspective to your technical work.

**Start where you are** – You don't need permission to begin learning. Find data problems in your current role and solve them.

**Build in public** – Share your projects on GitHub. Write about what you're learning. This creates a portfolio and helps solidify your understanding.

**Persistence matters** – Career transitions take time. Focus on consistent progress rather than overnight transformation.

## Advice for Aspiring Data Engineers

If you're considering a transition to data engineering:

1. **Get comfortable with SQL** – It's the foundation. Practice with real datasets, not just toy examples.

2. **Learn a programming language** – Python is most common, but focus on fundamentals applicable across languages.

3. **Understand data fundamentals** – Database design, normalization, data modeling. These concepts are timeless.

4. **Build projects** – Create something real, even if small. Nothing beats hands-on experience.

5. **Connect with the community** – Join data engineering communities, attend meetups, engage on social media.

The path from IT support to data engineering isn't conventional, but it's valid. Your unique journey brings perspectives that enrich the field.
    `,
  },
  {
    id: 3,
    title: 'Machine Learning in Production: Lessons Learned',
    date: '2024-02-10',
    category: 'Machine Learning',
    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `
Deploying machine learning models to production environments presents challenges that rarely appear in development. Here are hard-won lessons from building production ML systems.

## The Reality Gap

Models that perform beautifully in notebooks often struggle in production. The gap between development and production environments can sink ML projects.

**Training-serving skew** is the most common culprit. Your model trains on historical data but serves predictions on fresh data that may have different distributions. Monitor for drift continuously and have retraining pipelines ready.

## Versioning Everything

In ML systems, code is just one piece of the puzzle. You must version:
- Model artifacts and weights
- Training data and feature engineering code
- Model hyperparameters and configuration
- Dependencies and environment specifications

Tools like MLflow and DVC help manage this complexity. Without proper versioning, debugging production issues becomes nearly impossible.

## Feature Engineering Pipelines

Feature engineering often contains the most business logic in ML systems. Ensure your feature generation is:
- **Reproducible** – Same inputs always produce same outputs
- **Testable** – Unit tests for transformation logic
- **Monitored** – Track feature distributions over time
- **Documented** – Future you will forget why you engineered features this way

## Model Monitoring

Model accuracy isn't enough. Monitor:
- **Prediction distribution** – Are predictions shifting over time?
- **Feature distribution** – Is input data changing?
- **Performance metrics** – Not just accuracy, but business metrics
- **Latency and throughput** – System performance under load

Set up alerts for anomalies, but validate them carefully. False positives erode trust in monitoring systems.

## A/B Testing and Gradual Rollouts

Never deploy a model to 100% of traffic immediately. Use gradual rollouts:
1. Shadow mode – Run new model alongside old, compare outputs without affecting users
2. Canary deployment – Serve new model to small percentage of traffic
3. A/B test – Compare new model against baseline with statistical rigor
4. Full rollout – Only after validating improvement

This approach catches issues before they impact all users.

## The Importance of Fallbacks

ML models will fail. Have fallback strategies:
- Rule-based systems for when models are unavailable
- Cached predictions for common inputs
- Graceful degradation rather than complete failure

Users prefer a working system with occasional inaccuracies to a system that breaks.

## Documentation and Communication

Document model decisions, assumptions, and limitations. When models make mistakes (and they will), stakeholders need context to understand why.

Regular communication with business stakeholders prevents misaligned expectations. ML isn't magic – be transparent about limitations.

## Continuous Learning

The ML landscape evolves rapidly. What works today may be outdated tomorrow. Budget time for:
- Evaluating new tools and techniques
- Revisiting model architecture decisions
- Improving pipelines based on lessons learned

## Conclusion

Production ML is engineering first, machine learning second. Focus on reliability, maintainability, and user value. The fanciest model means nothing if it doesn't work in production.
    `,
  },
  {
    id: 4,
    title: 'The Power of Data Quality in Analytics',
    date: '2024-01-22',
    category: 'Data Quality',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `
"Garbage in, garbage out" isn't just a saying – it's a fundamental truth of data analytics. Poor data quality undermines even the most sophisticated analyses.

## The Hidden Cost of Bad Data

Organizations often don't recognize the cost of data quality issues until it's too late. Bad data leads to:
- Incorrect business decisions based on flawed insights
- Wasted analyst time investigating anomalies
- Lost trust in data systems and analytics teams
- Regulatory compliance risks

Gartner estimates poor data quality costs organizations an average of $12.9 million annually. The true cost is likely higher when considering opportunity costs.

## Common Data Quality Issues

**Completeness** – Missing values that should exist. Is the missing data truly missing or a collection issue?

**Accuracy** – Does data correctly represent reality? Schema validation catches format issues but not semantic errors.

**Consistency** – Is the same data represented the same way across systems? Date formats, naming conventions, and units must align.

**Timeliness** – Is data available when needed? Stale data leads to outdated decisions.

**Uniqueness** – Are there duplicate records? Duplicates skew aggregations and inflate metrics.

## Building a Data Quality Framework

Start by identifying critical data elements. Not all data requires the same quality standards. Focus first on data that drives key decisions and metrics.

Define quality dimensions for each critical element:
- Completeness thresholds (e.g., 95% of records must have email addresses)
- Validation rules (e.g., dates must be in valid ranges)
- Consistency requirements across systems
- Freshness requirements (e.g., updated within 24 hours)

## Implementing Quality Checks

Implement validation at multiple stages:

**At ingestion** – Catch issues at the source before they propagate. Reject or quarantine invalid data.

**During transformation** – Validate that transformations produce expected results. Check for unexpected nulls, duplicates, or anomalies.

**Before serving** – Final validation before data reaches consumers. This is your last line of defense.

## Automation is Essential

Manual quality checks don't scale. Tools like Great Expectations, dbt tests, and custom validation frameworks allow you to codify quality requirements.

Automated checks should:
- Run on schedule or triggered by data updates
- Generate clear, actionable alerts
- Provide context for failures
- Track quality metrics over time

## Data Quality Metrics

Measure and monitor:
- **Completeness rate** – Percentage of required fields populated
- **Error rate** – Failed validations per total records
- **Timeliness** – Average data freshness
- **Schema compliance** – Records matching expected structure

Track these metrics over time to identify trends and prevent degradation.

## Cultural Aspects

Data quality isn't just technical – it's cultural. Build a culture where:
- Teams feel ownership of data quality
- Quality issues are addressed promptly, not ignored
- Root causes are investigated, not just symptoms
- Quality metrics are visible to all stakeholders

## The ROI of Quality

Investing in data quality pays dividends:
- Faster analysis with less time spent on data cleaning
- Increased trust in analytics and data-driven decisions
- Fewer operational issues from bad data
- Improved customer experiences

Start small, demonstrate value, then expand. Quick wins build momentum for larger initiatives.

## Conclusion

Data quality isn't glamorous, but it's foundational. Invest in quality early, maintain it vigilantly, and reap benefits in everything built on top of clean data.
    `,
  },
  {
    id: 5,
    title: 'Cloud Infrastructure for Data Engineering',
    date: '2024-01-08',
    category: 'Cloud & Infrastructure',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `
Choosing the right cloud infrastructure for data engineering workloads involves balancing performance, cost, and operational complexity. Here's what I've learned from building data platforms across different cloud providers.

## The Cloud Landscape

The major players – AWS, Google Cloud, and Azure – all offer comprehensive data services. The best choice depends on your specific needs, existing infrastructure, and team expertise.

**AWS** provides the broadest service catalog and mature ecosystem. Services like S3, Redshift, EMR, and Glue cover most data engineering needs.

**Google Cloud Platform** excels in big data and machine learning with BigQuery, Dataflow, and Vertex AI. The platform feels more integrated and easier to navigate.

**Azure** integrates seamlessly with Microsoft ecosystems and offers strong enterprise features. Azure Synapse and Data Factory are powerful but have steeper learning curves.

## Storage Strategies

Object storage (S3, GCS, Azure Blob) is the foundation of modern data platforms. It's cheap, scalable, and integrates with most processing engines.

**Data lake architecture** – Store raw data in object storage using formats like Parquet or ORC. This provides flexibility to process data with different tools as needs evolve.

**Lifecycle policies** – Automatically transition older data to cheaper storage tiers. Configure this early before accumulating massive bills.

**Partitioning** – Organize data by date, geography, or other logical divisions. This dramatically improves query performance and reduces costs.

## Compute Choices

**Serverless options** like AWS Lambda, Google Cloud Functions, and Azure Functions work well for lightweight transformations. They scale automatically and you only pay for execution time.

**Managed services** like AWS Glue, Google Dataflow, and Azure Data Factory abstract infrastructure management. Great for teams wanting to focus on logic rather than operations.

**Self-managed clusters** using EMR, Dataproc, or HDInsight provide more control and can be cost-effective at scale. They require more operational expertise.

## Data Warehousing

Modern cloud data warehouses separate storage from compute, allowing independent scaling.

**BigQuery** is easiest to start with – no cluster management, automatic optimization, and powerful SQL. Pay-per-query or flat-rate pricing.

**Redshift** offers strong performance for complex queries and integrates well with AWS ecosystem. Requires more tuning but provides cost advantages at scale.

**Snowflake** (available on all major clouds) provides excellent performance with minimal tuning. Higher cost but lower operational overhead.

## Cost Optimization

Cloud costs spiral quickly without discipline:

**Right-size resources** – Don't default to large instances. Profile workloads and adjust accordingly.

**Use spot/preemptible instances** – For fault-tolerant workloads, spot instances provide 60-90% cost savings.

**Schedule resources** – Shut down development and testing infrastructure outside business hours. This alone can save 60% on non-production costs.

**Monitor continuously** – Set up cost alerts and review spending regularly. Small inefficiencies compound quickly.

**Reserve capacity** – For predictable workloads, reserved instances provide significant discounts.

## Infrastructure as Code

Manage infrastructure using Terraform, CloudFormation, or other IaC tools. This provides:
- Version control for infrastructure changes
- Reproducible environments
- Documentation through code
- Easier disaster recovery

Start with IaC from day one. Retrofitting is painful.

## Security Considerations

**Encryption** – Enable encryption at rest and in transit. Most cloud services make this easy.

**Access control** – Follow principle of least privilege. Use IAM roles and policies to limit access.

**Network isolation** – Use VPCs to isolate data infrastructure from public internet.

**Audit logging** – Enable comprehensive logging for security and compliance.

## Multi-Cloud vs. Single Cloud

Multi-cloud sounds appealing but adds operational complexity. Consider multi-cloud only if:
- Required for regulatory compliance
- Avoiding vendor lock-in is critical business requirement
- Different clouds offer clear advantages for specific workloads

Otherwise, optimize for a single cloud to reduce complexity.

## Migration Strategies

When migrating to cloud:
1. Start with new projects rather than migrating existing systems
2. Build expertise before committing to large migrations
3. Use managed services to reduce operational burden
4. Plan for data transfer costs (often overlooked)

## Conclusion

Cloud infrastructure enables data engineering teams to focus on delivering value rather than managing servers. Choose services aligned with team skills, start with managed offerings, and optimize costs continuously. The cloud's flexibility is both its greatest strength and biggest risk – discipline is essential.
    `,
  },
];

export default function BlogPost({ postId, onNavigate }: BlogPostProps) {
  const post = blogPostsData.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => onNavigate('Blog')}
            className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-mono">Back to Blog</span>
          </button>
          <p className="text-gray-600 font-mono">Post not found</p>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;

    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'github':
        window.open('https://github.com/BernadinePierre', '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <article className="max-w-3xl mx-auto">
        <button
          onClick={() => onNavigate('Blog')}
          className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors mb-8 font-mono text-sm"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </button>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover mb-8 border-4 border-black"
        />

        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-black text-white text-sm font-mono">
              {post.category}
            </span>
            <time className="text-sm text-gray-500 font-mono">{post.date}</time>
          </div>
          <h1 className="text-4xl font-mono font-bold border-b-4 border-black pb-4">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-mono font-bold mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  <strong className="font-bold">{paragraph.replace(/\*\*/g, '')}</strong>
                </p>
              );
            }
            if (paragraph.match(/^\d+\./)) {
              const items = paragraph.split('\n');
              return (
                <ol key={index} className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                  ))}
                </ol>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/^-\s*/, '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        <footer className="mt-12 pt-8 border-t-2 border-gray-300">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('Blog')}
              className="px-6 py-2 border-2 border-black font-mono text-sm hover:bg-black hover:text-white transition-colors"
            >
              Back to Blog
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-mono text-gray-600">Share:</span>
              <button
                onClick={() => handleShare('linkedin')}
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={24} />
              </button>
              <button
                onClick={() => handleShare('github')}
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="Visit GitHub"
              >
                <Github size={24} />
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
