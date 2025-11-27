/*
  # Import Original Data - Batch 3: Testimonials
  
  This migration imports all testimonials from the original database.
*/

INSERT INTO testimonials (id, client_name, client_position, client_company, testimonial, rating, is_active, created_at) VALUES
('b46ef681-d8dd-4613-8a09-d40a9991abe0', 'Sarah Mitchell', 'CEO, TechStart Innovations', 'TechStart Innovations',
'Working with Technocrat was transformative for our business. They delivered a stunning e-commerce platform that increased our online sales by 300% within the first quarter. Their attention to detail and commitment to our success was outstanding.',
5, true, '2025-11-23T13:58:34.130293+00:00'::timestamptz),

('9fd61283-d92a-4531-980c-5e94d0ae1806', 'James Rodriguez', 'CTO, FinanceFlow', 'FinanceFlow',
'The mobile app they built for us exceeded all expectations. The user experience is seamless, and our customers love it. The team was professional, responsive, and delivered ahead of schedule. Highly recommended!',
5, true, '2025-11-23T13:58:34.130293+00:00'::timestamptz),

('06e54a7f-739e-46ee-aa82-3f8a9a2ef62c', 'Emily Chen', 'Marketing Director, GreenEarth Solutions', 'GreenEarth Solutions',
'Their AI-driven SEO services completely transformed our online visibility. We went from page 5 to page 1 for our key search terms within 3 months. The ROI has been incredible, and the team provides excellent ongoing support.',
5, true, '2025-11-23T13:58:34.130293+00:00'::timestamptz),

('6ae1f22a-d81d-432a-b489-c11f61be7cfc', 'Michael Thompson', 'Founder, CloudSync Pro', 'CloudSync Pro',
'Technocrat helped us migrate our entire infrastructure to the cloud seamlessly. Zero downtime, improved performance, and significant cost savings. Their DevOps expertise is world-class.',
5, true, '2025-11-23T13:58:34.130293+00:00'::timestamptz),

('c00dc269-a440-4f6d-bbd6-a4dec812c470', 'Lisa Wang', 'Product Manager, DataVision Analytics', 'DataVision Analytics',
'The custom dashboard they created gives us real-time insights that drive our business decisions. The data visualizations are beautiful and incredibly useful. This has been a game-changer for our operations.',
5, true, '2025-11-23T13:58:34.130293+00:00'::timestamptz),

('98d1c7a1-999a-43b3-bb80-55d808d13b99', 'David Kumar', 'Operations Manager, AutomateNow Inc', 'AutomateNow Inc',
'Their AI workflow automation solution saved us countless hours of manual work. The chatbot they built handles 80% of our customer inquiries automatically. ROI was achieved within 2 months.',
5, true, '2025-11-23T13:58:34.130293+00:00'::timestamptz);
