/*
  # Import Original Data - Batch 6: Case Studies (Part 3) - Fixed
  
  This migration imports remaining case studies from the original database.
*/

INSERT INTO case_studies (id, title, slug, client, description, services, image_url, result, challenge, solution, technologies, is_featured, display_order, created_at) VALUES
('0f3e3bb7-c5e3-4bf0-b028-09ef75a748d5', 'Predictive Analytics for Customer Churn Prevention', 'telecomplus-data-science', 'TelecomPlus',
'Developed machine learning models to predict customer churn with 92% accuracy, enabling proactive retention strategies that saved millions in revenue for a telecommunications provider.',
ARRAY['Data Science Services', 'Machine Learning', 'Predictive Analytics'],
'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg',
'• 92% accuracy in churn prediction
• $12M annual revenue retained
• 35% reduction in customer churn
• ROI of 450% in first year
• Identified key churn indicators for product improvement',
'TelecomPlus was losing customers at an alarming rate but couldn''t identify at-risk customers early enough to take preventive action. They needed predictive models that could analyze complex patterns across multiple data sources.',
'We built a comprehensive data science solution using advanced machine learning techniques. The system analyzes customer behavior, usage patterns, support interactions, and billing data to predict churn probability. We implemented automated workflows that trigger personalized retention offers for at-risk customers.',
ARRAY['Python', 'TensorFlow', 'Scikit-learn', 'Apache Spark', 'Jupyter', 'AWS'],
false, 7, '2025-11-23T14:10:04.500463+00:00'::timestamptz),

('39a55260-b4b9-45c8-9175-4f53e299e1d0', 'AI-Powered SEO Optimization Platform', 'contentking-ai-seo', 'ContentKing Digital',
'Created an AI-driven SEO platform that increased organic traffic by 340% through intelligent content optimization, competitor analysis, and automated technical SEO improvements.',
ARRAY['AI Driven SEO', 'Content Marketing', 'AI Services'],
'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg',
'• 340% increase in organic traffic
• 250+ websites optimized
• Average 180% improvement in keyword rankings
• $8M in additional revenue for clients
• 75% reduction in SEO workload',
'ContentKing''s clients were struggling to keep up with constantly changing SEO algorithms and couldn''t efficiently optimize content at scale. They needed an intelligent system that could analyze, recommend, and implement SEO improvements automatically.',
'We developed an AI-powered platform that analyzes website content, identifies optimization opportunities, and automatically implements improvements. The system uses natural language processing to optimize content, monitors search engine algorithm changes, and provides actionable recommendations. We integrated with popular CMS platforms for seamless deployment.',
ARRAY['Python', 'GPT-4', 'React', 'Node.js', 'SEMrush API', 'MongoDB'],
false, 8, '2025-11-23T14:10:04.500463+00:00'::timestamptz),

('8f3cfed3-9982-4c1c-9b5a-7fc8bf08d785', 'Intelligent Workflow Automation Platform', 'processflow-automation', 'ProcessFlow Inc',
'Built an enterprise workflow automation platform that reduced manual processing time by 80% through AI-powered document processing, smart routing, and integration with 50+ business tools.',
ARRAY['AI Workflow Automation', 'Enterprise Software', 'Integration'],
'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
'• 80% reduction in manual processing time
• $2M annual labor cost savings
• Processing 100,000+ documents monthly
• 95% accuracy in document classification
• Integrated with 50+ business applications',
'ProcessFlow''s clients were drowning in manual paperwork and data entry. They needed an intelligent automation solution that could handle various document types, extract relevant information, and route tasks to the right people or systems.',
'We created a comprehensive automation platform using AI for document understanding and classification. The system includes OCR for document scanning, machine learning for data extraction, smart routing based on content analysis, and native integrations with popular business tools. We built a visual workflow designer for easy customization.',
ARRAY['Python', 'OpenAI', 'React', 'Node.js', 'Zapier', 'Tesseract OCR'],
false, 9, '2025-11-23T14:10:04.500463+00:00'::timestamptz),

('d5a8e2f1-4b3c-4a1d-8e9f-6c7d8e9f0a1b', '24/7 AI Customer Service Chatbot', 'supportai-chatbot', 'SupportAI Solutions',
'Deployed an intelligent chatbot handling 80% of customer inquiries automatically, reducing support costs by 60% while improving response times and customer satisfaction.',
ARRAY['Robot Chat & Virtual Assistants', 'AI Services', 'Customer Support'],
'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg',
'• Handling 80% of inquiries autonomously
• 60% reduction in support costs
• Average response time under 2 seconds
• 4.6/5 customer satisfaction rating
• Supported in 12 languages',
'SupportAI''s clients were struggling with high support volumes, long wait times, and escalating costs. They needed an intelligent chatbot that could understand complex queries, provide accurate responses, and seamlessly escalate to human agents when necessary.',
'We developed a conversational AI chatbot using advanced natural language processing and machine learning. The system includes intent recognition, context management, integration with knowledge bases, sentiment analysis, and smart escalation logic. The chatbot learns from interactions and improves over time.',
ARRAY['OpenAI', 'LangChain', 'React', 'Node.js', 'PostgreSQL', 'Twilio'],
false, 10, '2025-11-23T14:10:04.500463+00:00'::timestamptz),

('9187134f-5e79-482c-840c-859902b9e0eb', 'Computer Vision Quality Control System', 'visionqc-ai', 'ManufactureTech Industries',
'Implemented an AI-powered visual inspection system that detects manufacturing defects with 98.5% accuracy, significantly improving product quality and reducing waste.',
ARRAY['AI Services', 'Computer Vision', 'Manufacturing'],
'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg',
'• 98.5% defect detection accuracy
• 70% reduction in quality control costs
• Processing 1,000+ items per hour
• 85% reduction in defective products shipped
• ROI achieved in 6 months',
'ManufactureTech needed to improve their quality control process which was slow, expensive, and prone to human error. They required an automated system that could inspect products at high speed with consistent accuracy.',
'We developed a computer vision system using deep learning models trained on thousands of product images. The system includes high-speed cameras, real-time image processing, defect classification, automated sorting, and detailed reporting. The solution integrates with existing manufacturing equipment and ERP systems.',
ARRAY['Python', 'TensorFlow', 'OpenCV', 'PyTorch', 'Docker', 'PostgreSQL'],
false, 11, '2025-11-23T14:10:04.500463+00:00'::timestamptz);
