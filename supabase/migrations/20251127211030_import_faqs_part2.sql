/*
  # Import FAQs - Part 2
  
  This migration imports more FAQs from the original database.
*/

INSERT INTO faqs (id, category, question, answer, display_order, is_active, created_at, updated_at) VALUES
('f6a7b8c9-d0e1-4234-f5a6-b7c8d9e0f1a2', 'Pricing', 'Do you offer payment plans?',
'Yes, we offer flexible payment structures to accommodate different budgets. For larger projects, we typically use milestone-based payments where you pay as we complete specific phases. We also offer monthly payment plans for ongoing development and maintenance. Our goal is to make quality development accessible while ensuring project success.',
6, true, NOW(), NOW()),

('a7b8c9d0-e1f2-4345-a6b7-c8d9e0f1a2b3', 'Technical', 'What technologies do you use?',
'We work with modern, proven technologies including React, Next.js, TypeScript, Node.js, Python, React Native, Flutter, AWS, Azure, PostgreSQL, MongoDB, and more. We choose technologies based on your specific needs, scalability requirements, long-term maintenance considerations, and team expertise. We stay current with industry best practices and emerging technologies.',
7, true, NOW(), NOW()),

('b8c9d0e1-f2a3-4456-b7c8-d9e0f1a2b3c4', 'Technical', 'Can you work with our existing codebase?',
'Absolutely! We have extensive experience working with existing codebases across various technologies and frameworks. We can audit your current system, identify areas for improvement, refactor legacy code, add new features, optimize performance, and modernize your tech stack. Whether you need maintenance, enhancements, or a complete overhaul, we can help.',
8, true, NOW(), NOW()),

('c9d0e1f2-a3b4-4567-c8d9-e0f1a2b3c4d5', 'Technical', 'Do you provide hosting and maintenance?',
'Yes, we provide comprehensive hosting solutions and ongoing maintenance services. This includes cloud infrastructure setup and management, security updates and patches, performance monitoring and optimization, regular backups, SSL certificates, CDN configuration, and 24/7 uptime monitoring. We offer different service tiers based on your needs and can work with your preferred cloud provider.',
9, true, NOW(), NOW()),

('d0e1f2a3-b4c5-4678-d9e0-f1a2b3c4d5e6', 'Process', 'How do we get started?',
'Getting started is easy! Simply reach out through our contact form, email, or phone to schedule a free consultation. During this initial call, we will discuss your project goals, requirements, timeline, and budget. Then we will provide a detailed proposal outlining the scope, timeline, deliverables, and pricing. Once you approve the proposal, we can kick off the project and start building your solution.',
10, true, NOW(), NOW());
