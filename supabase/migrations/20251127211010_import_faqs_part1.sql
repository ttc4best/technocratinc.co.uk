/*
  # Import FAQs - Part 1
  
  This migration imports the first batch of FAQs from the original database.
*/

INSERT INTO faqs (id, category, question, answer, display_order, is_active, created_at, updated_at) VALUES
('a1b2c3d4-e5f6-4789-a0b1-c2d3e4f5a6b7', 'General', 'What services does Technocrat Solutions offer?',
'We offer a comprehensive range of digital services including custom web development, mobile app development (iOS and Android), cloud integration, UI/UX design, e-commerce solutions (including Shopify), data analytics, AI services, SEO optimization, and workflow automation. Our team specializes in building scalable, modern applications tailored to your business needs.',
1, true, NOW(), NOW()),

('b2c3d4e5-f6a7-4890-b1c2-d3e4f5a6b7c8', 'General', 'How long does a typical project take?',
'Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex mobile app or enterprise solution could take 3-6 months. During our initial consultation, we provide a detailed timeline based on your specific requirements. We follow agile methodologies with regular milestones and check-ins to ensure transparency throughout the project.',
2, true, NOW(), NOW()),

('c3d4e5f6-a7b8-4901-c2d3-e4f5a6b7c8d9', 'Process', 'What is your development process?',
'We follow an agile development methodology with these key phases: 1) Discovery & Planning - We understand your goals and requirements, 2) Design - Create wireframes and visual designs, 3) Development - Build your solution using best practices, 4) Testing - Rigorous QA to ensure quality, 5) Deployment - Launch your project, and 6) Support - Ongoing maintenance and updates. You will have full visibility and regular updates throughout each phase.',
3, true, NOW(), NOW()),

('d4e5f6a7-b8c9-4012-d3e4-f5a6b7c8d9e0', 'Support', 'Do you provide ongoing support after launch?',
'Yes! We offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements. We provide different support tiers to match your needs, from basic maintenance to dedicated support teams. Our goal is to ensure your application continues to run smoothly and evolves with your business needs.',
4, true, NOW(), NOW()),

('e5f6a7b8-c9d0-4123-e4f5-a6b7c8d9e0f1', 'Pricing', 'How much does a project cost?',
'Project costs vary significantly based on requirements, complexity, features, and timeline. Simple websites start around $5,000, while complex mobile apps or enterprise solutions can range from $20,000 to $100,000+. We offer flexible pricing models including fixed-price, time & materials, and dedicated team options. Contact us for a detailed quote tailored to your specific needs - we will work with you to find a solution that fits your budget.',
5, true, NOW(), NOW());
