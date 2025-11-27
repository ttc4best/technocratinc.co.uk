/*
  # Import Original Data - Batch 2: Services (Part 2)
  
  This migration imports the remaining services from the original database.
*/

INSERT INTO services (id, title, slug, short_description, full_description, icon, features, pricing_info, technologies, is_active, display_order, created_at) VALUES
('90afb861-367b-41dd-847f-62d76fa7af9f', 'Cloud Integration', 'cloud-integration',
'Seamlessly connect your systems with scalable cloud infrastructure and third-party services.',
'Modernize your IT infrastructure with our cloud integration services. We help you migrate to the cloud, integrate with popular platforms, and build scalable architectures that grow with your business. Our solutions ensure high availability, security, and cost-efficiency across AWS, Azure, and Google Cloud.',
'cloud',
'["Cloud Migration", "API Development", "Microservices Architecture", "CI/CD Pipelines", "Container Orchestration", "Monitoring & Logging"]'::jsonb,
'Starting at $12,000',
ARRAY['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
true, 5, '2025-11-23T13:50:11.775653+00:00'::timestamptz),

('e5b7ecab-69e0-44ef-b520-33bf9e6883d7', 'Analytics & Insights', 'analytics-insights',
'Transform raw data into actionable insights with advanced analytics and visualization tools.',
'Make data-driven decisions with our analytics solutions. We implement comprehensive tracking, create custom dashboards, and provide deep insights into user behavior, business metrics, and performance indicators. Our solutions help you understand what matters most and optimize accordingly.',
'bar-chart',
'["Custom Dashboards", "Real-time Analytics", "Data Visualization", "Performance Tracking", "Conversion Optimization", "Reporting Automation"]'::jsonb,
'Starting at $7,000',
ARRAY['Google Analytics', 'Mixpanel', 'Tableau', 'Power BI', 'D3.js', 'Python'],
true, 6, '2025-11-23T13:50:11.775653+00:00'::timestamptz),

('33163527-d93f-4dbf-9c62-a0ef4dee5f8b', 'Data Science Services', 'data-science-services',
'Unlock the power of your data with machine learning, predictive analytics, and statistical modeling.',
'Leverage advanced data science techniques to gain competitive advantages. Our data scientists build predictive models, conduct statistical analysis, and extract valuable patterns from your data. We turn complex datasets into strategic insights that drive business growth and innovation.',
'database',
'["Predictive Modeling", "Statistical Analysis", "Data Mining", "A/B Testing", "Custom Algorithms", "Data Pipeline Development"]'::jsonb,
'Starting at $18,000',
ARRAY['Python', 'R', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Jupyter'],
true, 7, '2025-11-23T13:50:11.775653+00:00'::timestamptz),

('c90f997f-2854-43a0-a3fb-7853b6f10f5d', 'AI Driven SEO', 'ai-driven-seo',
'Dominate search rankings with intelligent SEO strategies powered by artificial intelligence.',
'Boost your organic visibility with our AI-enhanced SEO services. We use machine learning algorithms to identify opportunities, optimize content, and predict search trends. Our data-driven approach ensures your website ranks higher, attracts quality traffic, and converts visitors into customers.',
'trending-up',
'["Keyword Research", "Content Optimization", "Technical SEO", "Link Building", "Competitor Analysis", "Performance Monitoring"]'::jsonb,
'Starting at $4,000/month',
ARRAY['SEMrush', 'Ahrefs', 'Google Search Console', 'Python', 'GPT-4', 'Custom AI Tools'],
true, 8, '2025-11-23T13:50:11.775653+00:00'::timestamptz),

('a81f7562-f12c-4921-9ef9-adb4f2e8f852', 'AI Workflow Automation', 'ai-workflow-automation',
'Streamline operations and boost productivity with intelligent automation solutions.',
'Automate repetitive tasks and optimize workflows with AI-powered automation. We design and implement smart systems that handle everything from data entry to complex decision-making processes. Our solutions free up your team to focus on strategic work while improving accuracy and efficiency.',
'workflow',
'["Process Automation", "Document Processing", "Email Automation", "Data Extraction", "Smart Routing", "Integration with Existing Tools"]'::jsonb,
'Starting at $10,000',
ARRAY['Zapier', 'Make', 'Python', 'RPA Tools', 'OpenAI', 'Custom Scripts'],
true, 9, '2025-11-23T13:50:11.775653+00:00'::timestamptz),

('b7bd15b6-be37-4dac-a95b-1b17e0de1ef2', 'Robot Chat & Virtual Assistants', 'robot-chat-virtual-assistants',
'Enhance customer engagement with intelligent chatbots and AI-powered virtual assistants.',
'Provide 24/7 customer support and engagement with our conversational AI solutions. We build intelligent chatbots and virtual assistants that understand natural language, learn from interactions, and deliver personalized experiences. Our solutions integrate seamlessly with your existing platforms.',
'message-square',
'["Natural Language Processing", "Multi-channel Support", "Intent Recognition", "Contextual Responses", "CRM Integration", "Analytics Dashboard"]'::jsonb,
'Starting at $12,000',
ARRAY['OpenAI', 'Dialogflow', 'Rasa', 'LangChain', 'React', 'Node.js'],
true, 10, '2025-11-23T13:50:11.775653+00:00'::timestamptz),

('d8fb0210-6a77-4577-9f47-c12b46bd3c9e', 'AI Services', 'ai-services',
'Harness cutting-edge artificial intelligence to transform your business and create competitive advantages.',
'Stay ahead of the curve with our comprehensive AI services. From machine learning models to computer vision and natural language processing, we implement AI solutions that solve real business problems. We make advanced AI technology accessible and practical for your organization.',
'sparkles',
'["Machine Learning Models", "Computer Vision", "Natural Language Processing", "Custom AI Solutions", "Model Training & Deployment", "AI Strategy Consulting"]'::jsonb,
'Starting at $25,000',
ARRAY['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Azure AI', 'Google AI'],
true, 11, '2025-11-23T13:50:11.775653+00:00'::timestamptz);
