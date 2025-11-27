/*
  # Import Original Blog Posts - Complete Data
  
  This migration imports all blog posts from the original database.
*/

-- First delete the test blog posts we created earlier
DELETE FROM blog_posts WHERE id IN ('f1a2b3c4-d5e6-4f7a-8b9c-0d1e2f3a4b5c', 'a2b3c4d5-e6f7-4a8b-9c0d-1e2f3a4b5c6d', 'b3c4d5e6-f7a8-4b9c-0d1e-2f3a4b5c6d7e');

-- Insert actual blog posts
INSERT INTO blog_posts (id, title, slug, excerpt, content, author_name, category, tags, is_published, published_at, reading_time, views, created_at, updated_at) VALUES
('e8aa8a2a-389d-4125-863d-84396ea3d882', 'Data Security in the Age of AI', 'data-security-age-of-ai',
'Protecting your sensitive data while leveraging the power of artificial intelligence.',
'As AI becomes more prevalent in business applications, data security concerns are growing. How do you balance innovation with protection? This article explores the intersection of AI and cybersecurity.

We discuss encryption techniques, data anonymization, secure AI model training, and compliance with regulations like GDPR and CCPA. You will learn about AI-powered security solutions that can detect threats in real-time.

Topics include federated learning, differential privacy, secure multi-party computation, and best practices for handling sensitive data in AI pipelines. Whether you are implementing AI solutions or concerned about security, this guide provides actionable insights.',
'Jennifer Lee', 'Cybersecurity', ARRAY['Security', 'AI', 'Privacy', 'Compliance', 'Data Protection'],
true, '2025-11-05T13:59:47.78931+00:00'::timestamptz, 13, 1890,
'2025-11-23T13:59:47.78931+00:00'::timestamptz, '2025-11-23T13:59:47.78931+00:00'::timestamptz),

('97cd6755-61c0-4ecf-af6f-6a48ba1e1fcb', 'The Future of AI in Business Automation', 'future-ai-business-automation',
'Discover how artificial intelligence is revolutionizing business processes and what it means for your organization in 2025 and beyond.',
'Artificial intelligence is no longer a futuristic concept—it is here, and it is transforming how businesses operate. From automating repetitive tasks to providing predictive analytics, AI is becoming an essential tool for companies looking to stay competitive.

In this comprehensive guide, we will explore the latest trends in AI automation, including natural language processing, machine learning models, and intelligent process automation. We will also discuss practical applications across different industries and how your business can start leveraging AI today.

Key areas we will cover include chatbots and virtual assistants, predictive maintenance, fraud detection, and personalized customer experiences. Whether you are a small startup or a large enterprise, there is an AI solution that can help streamline your operations and drive growth.',
'Alex Johnson', 'AI & Machine Learning', ARRAY['AI', 'Automation', 'Business Strategy', 'Innovation'],
true, '2025-11-21T13:59:47.78931+00:00'::timestamptz, 8, 1250,
'2025-11-23T13:59:47.78931+00:00'::timestamptz, '2025-11-23T13:59:47.78931+00:00'::timestamptz),

('be7c9c02-2eda-4dd4-a642-7e4aa1acaf98', 'Building Scalable Web Applications with React and Node.js', 'building-scalable-web-apps-react-nodejs',
'Learn the best practices for creating high-performance web applications that can grow with your business needs.',
'Scalability is one of the most critical aspects of modern web development. As your user base grows, your application needs to handle increased traffic without compromising performance or user experience.

In this article, we dive deep into building scalable web applications using React for the frontend and Node.js for the backend. We will cover architectural patterns like microservices, caching strategies, database optimization, and load balancing.

You will learn about horizontal and vertical scaling, implementing CDNs, optimizing React components for performance, and designing RESTful APIs that can handle millions of requests. We will also discuss containerization with Docker and orchestration with Kubernetes for seamless deployment.',
'Sarah Chen', 'Web Development', ARRAY['React', 'Node.js', 'Architecture', 'Performance'],
true, '2025-11-18T13:59:47.78931+00:00'::timestamptz, 12, 2100,
'2025-11-23T13:59:47.78931+00:00'::timestamptz, '2025-11-23T13:59:47.78931+00:00'::timestamptz);
