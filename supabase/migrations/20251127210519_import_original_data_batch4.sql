/*
  # Import Original Data - Batch 4: Case Studies (Part 1)
  
  This migration imports the first batch of case studies from the original database.
*/

INSERT INTO case_studies (id, title, slug, client, description, services, image_url, result, challenge, solution, technologies, is_featured, display_order, created_at) VALUES
('0107def6-de3a-4d64-a9f1-d8268023171c', 'Custom Shopify Store with Advanced Integrations', 'luxe-fashion-shopify', 'Luxe Fashion Co',
'Built a high-converting Shopify Plus store with custom features including AI-powered product recommendations, multi-currency support, and seamless ERP integration for a luxury fashion brand.',
ARRAY['Shopify Solutions', 'E-commerce', 'API Integration'],
'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
'• 285% increase in online revenue
• 42% improvement in conversion rate
• 99.9% uptime during peak sales
• Reduced order processing time by 60%
• Expanded to 15 international markets',
'Luxe Fashion needed to migrate from a legacy platform to Shopify while maintaining complex customizations, integrating with their existing ERP system, and implementing advanced features for international sales.',
'We developed a custom Shopify Plus theme with headless architecture, integrated their ERP system via custom APIs, implemented AI-powered product recommendations, and set up multi-currency pricing with localized checkout experiences. The solution included automated inventory sync and custom fulfillment workflows.',
ARRAY['Shopify Plus', 'Liquid', 'React', 'Node.js', 'GraphQL', 'Stripe'],
true, 1, '2025-11-23T14:09:32.277509+00:00'::timestamptz),

('87056474-e2f8-4d9e-a227-5b1008ac51d5', 'Modern SaaS Platform for Project Management', 'taskmaster-saas-platform', 'TaskMaster Pro',
'Designed and developed a comprehensive project management SaaS platform with real-time collaboration, advanced analytics, and integrations with popular tools like Slack and Google Workspace.',
ARRAY['Website Design & Development', 'SaaS', 'Cloud Integration'],
'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
'• 10,000+ active users in first 6 months
• 4.8/5 user satisfaction rating
• 98% customer retention rate
• Processing 500,000+ tasks monthly
• Featured on Product Hunt top 5',
'TaskMaster needed a scalable platform to compete with established players while offering unique features. They required real-time collaboration, robust security, and seamless integrations with existing business tools.',
'We built a modern web application using React and Node.js with WebSocket support for real-time updates. The platform features drag-and-drop task management, Gantt charts, time tracking, and customizable workflows. We implemented OAuth integrations with major platforms and built comprehensive admin dashboards.',
ARRAY['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'WebSocket'],
true, 2, '2025-11-23T14:09:32.277509+00:00'::timestamptz),

('1f308d50-c4ea-461c-9f08-719983a4db67', 'Cross-Platform Fitness & Wellness Mobile App', 'fitlife-mobile-app', 'FitLife Coach',
'Created an all-in-one fitness mobile app featuring personalized workout plans, nutrition tracking, social community features, and integration with wearable devices for iOS and Android.',
ARRAY['Mobile Apps', 'Health Tech', 'AI Services'],
'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg',
'• 150,000+ downloads in first year
• 4.7/5 average app store rating
• 60% daily active user rate
• 500,000+ workouts completed
• Featured by Apple and Google',
'FitLife wanted to create an engaging fitness app that works seamlessly on both iOS and Android, integrates with popular fitness trackers, and provides personalized experiences based on user goals and progress.',
'We developed a cross-platform app using React Native with native modules for performance-critical features. The app includes AI-powered workout recommendations, barcode scanning for nutrition tracking, social feed, video streaming for workout tutorials, and integration with Apple Health and Google Fit.',
ARRAY['React Native', 'Node.js', 'MongoDB', 'Firebase', 'TensorFlow', 'HealthKit'],
true, 3, '2025-11-23T14:09:32.277509+00:00'::timestamptz);
