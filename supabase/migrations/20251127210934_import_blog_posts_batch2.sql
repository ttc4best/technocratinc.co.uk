/*
  # Import Remaining Blog Posts
  
  This migration imports the remaining 6 blog posts from the original database.
*/

INSERT INTO blog_posts (id, title, slug, excerpt, content, author_name, category, tags, is_published, published_at, reading_time, views, created_at, updated_at) VALUES
('03618945-167a-4164-aa80-6e750c8c3f8e', 'Cloud Migration: A Complete Guide for SMBs', 'cloud-migration-guide-smbs',
'Everything small and medium-sized businesses need to know about successfully migrating to the cloud.',
'Migrating to the cloud can seem daunting for small and medium-sized businesses, but the benefits far outweigh the challenges. This guide walks you through the entire process, from assessing your current infrastructure to choosing the right cloud provider and executing a smooth migration.

We cover AWS, Azure, and Google Cloud options, cost analysis, security considerations, and strategies for minimizing downtime. You will also learn about hybrid cloud approaches and how to train your team for the transition.

Whether you are looking to reduce IT costs, improve scalability, or enable remote work, cloud migration is a crucial step for modern businesses.',
'Michael Torres', 'Cloud Computing', ARRAY['Cloud', 'AWS', 'Azure', 'Migration', 'Infrastructure'],
true, '2025-11-16T13:59:47.78931+00:00'::timestamptz, 10, 1850,
'2025-11-23T13:59:47.78931+00:00'::timestamptz, '2025-11-23T13:59:47.78931+00:00'::timestamptz),

('87f5b07d-54c1-4c86-a906-f1b676102bc9', 'Shopify vs Custom E-commerce: Which is Right for You?', 'shopify-vs-custom-ecommerce',
'A comprehensive comparison to help you make the right decision for your online store.',
'Choosing between Shopify and a custom e-commerce solution is a critical decision that can impact your business for years to come. In this article, we break down the pros and cons of each approach.

Shopify offers quick setup, built-in features, and a large app ecosystem. Custom solutions provide complete flexibility, unique features, and no platform fees. We compare costs, development time, scalability, customization options, and long-term considerations.

Learn which option aligns with your business goals, technical resources, and growth plans.',
'Emma Williams', 'E-commerce', ARRAY['Shopify', 'E-commerce', 'Business Strategy'],
true, '2025-11-14T13:59:47.78931+00:00'::timestamptz, 9, 2350,
'2025-11-23T13:59:47.78931+00:00'::timestamptz, '2025-11-23T13:59:47.78931+00:00'::timestamptz),

('7be81127-bacf-4fcb-ae2b-d4321a6c42d6', 'Mobile-First Design: Best Practices for 2025', 'mobile-first-design-best-practices-2025',
'Master the art of designing for mobile devices in an increasingly mobile-centric world.',
'With over 60% of web traffic coming from mobile devices, mobile-first design is no longer optional—it is essential. This guide covers the latest best practices for creating exceptional mobile experiences.

Topics include responsive design patterns, touch-friendly interfaces, performance optimization, mobile navigation strategies, and accessibility considerations. We also discuss progressive web apps, mobile-specific features like geolocation and camera access, and testing across different devices.

Learn how to create designs that work beautifully on small screens while progressively enhancing for larger displays.',
'David Park', 'Design', ARRAY['Mobile', 'Design', 'UX', 'Best Practices'],
true, '2025-11-12T13:59:47.78931+00:00'::timestamptz, 11, 1950,
'2025-11-23T13:59:47.78931+00:00'::timestamptz, '2025-11-23T13:59:47.78931+00:00'::timestamptz),

('1e692da1-90cc-4611-a4fc-4df80a23392f', 'SEO in 2025: What Actually Works', 'seo-2025-what-actually-works',
'Cut through the noise and learn which SEO strategies deliver real results in 2025.',
'Search engine optimization is constantly evolving, and many outdated tactics no longer work. This article focuses on what actually matters in 2025: high-quality content, user experience, Core Web Vitals, E-E-A-T signals, and technical SEO fundamentals.

We explore AI-generated content and its impact on search rankings, voice search optimization, video SEO, and local SEO strategies. You will learn how to conduct effective keyword research, build quality backlinks, and measure your SEO success.

Stop wasting time on tactics that do not work and focus on strategies that drive real organic traffic.',
'Rachel Martinez', 'Digital Marketing', ARRAY['SEO', 'Marketing', 'Content Strategy'],
true, '2025-11-09T13:59:47.78931+00:00'::timestamptz, 14, 3200,
'2025-11-23T13:59:47.78931+00:00'::timestamptz, '2025-11-23T13:59:47.78931+00:00'::timestamptz),

('6398ae20-9c53-4f2c-8a96-e31471045d4e', 'Desktop Apps in a Mobile World: Why They Still Matter', 'desktop-apps-still-matter',
'Exploring the continued relevance and advantages of desktop applications in 2025.',
'Despite the mobile revolution, desktop applications remain crucial for many use cases. This article examines why desktop apps are still important and when they are the right choice for your project.

We discuss the advantages of desktop apps: superior performance, offline functionality, access to system resources, and better experiences for complex workflows. Learn about modern desktop development with Electron, Tauri, and native frameworks.

Case studies include professional tools like Adobe Creative Suite, development environments, and enterprise applications that thrive on desktop platforms.',
'James Anderson', 'Software Development', ARRAY['Desktop Apps', 'Electron', 'Software Architecture'],
true, '2025-11-07T13:59:47.78931+00:00'::timestamptz, 8, 1450,
'2025-11-23T13:59:47.78931+00:00'::timestamptz, '2025-11-23T13:59:47.78931+00:00'::timestamptz),

('f5073f61-105a-450c-b191-738a3959391d', 'Chatbots That Actually Help: A Guide to Conversational AI', 'chatbots-conversational-ai-guide',
'Learn how to build intelligent chatbots that solve real problems and delight users.',
'Bad chatbots frustrate users, but well-designed conversational AI can transform customer service and engagement. This comprehensive guide teaches you how to create chatbots that people actually want to use.

Topics include natural language processing, intent recognition, conversation design, context management, and seamless human handoff. We also cover sentiment analysis, multilingual support, and integration with business systems.

Whether you are building a customer support bot, sales assistant, or internal helpdesk tool, this guide provides the principles and practices for success.',
'Lisa Chang', 'AI & Machine Learning', ARRAY['Chatbots', 'AI', 'Customer Service', 'NLP'],
true, '2025-11-03T13:59:47.78931+00:00'::timestamptz, 10, 1680,
'2025-11-23T13:59:47.78931+00:00'::timestamptz, '2025-11-23T13:59:47.78931+00:00'::timestamptz);
