/*
  # Import Original Data - Batch 1: Services (Part 1)
  
  This migration imports the first batch of services from the original database.
*/

INSERT INTO services (id, title, slug, short_description, full_description, icon, features, pricing_info, technologies, is_active, display_order, created_at) VALUES
('807e824f-5a44-446e-82e6-2c132bc9479d', 'Shopify Solutions', 'shopify-solutions', 
'Launch and scale your online store with custom Shopify development and seamless integrations.',
'Transform your e-commerce vision into reality with our expert Shopify solutions. We specialize in custom theme development, app integrations, and store optimization to create high-converting online stores. From initial setup to advanced customizations, we ensure your Shopify store delivers exceptional shopping experiences that drive sales and customer loyalty.',
'shopping-cart', 
'["Custom Theme Development", "App Integration", "Payment Gateway Setup", "Store Migration", "Performance Optimization", "SEO Configuration"]'::jsonb,
'Starting at $8,000',
ARRAY['Shopify', 'Liquid', 'JavaScript', 'React', 'Shopify Plus', 'GraphQL'],
true, 1, '2025-11-23T13:50:11.775653+00:00'::timestamptz),

('5756f308-4ee7-4bc1-8736-aa6915b44298', 'Website Design & Development', 'website-design-development',
'Create stunning, responsive websites that captivate visitors and convert them into customers.',
'Elevate your online presence with our comprehensive website design and development services. We craft beautiful, user-friendly websites that are optimized for performance, accessibility, and search engines. Whether you need a corporate website, landing page, or complex web application, we deliver solutions that align with your brand and business objectives.',
'globe',
'["Responsive Design", "CMS Integration", "E-commerce Functionality", "SEO Optimization", "Performance Tuning", "Ongoing Maintenance"]'::jsonb,
'Starting at $5,000',
ARRAY['React', 'Next.js', 'WordPress', 'Webflow', 'Tailwind CSS', 'TypeScript'],
true, 2, '2025-11-23T13:50:11.775653+00:00'::timestamptz),

('30c56bd9-8b93-4032-a384-fc7d9f68f874', 'Mobile Apps', 'mobile-apps',
'Build powerful native and cross-platform mobile applications that engage users on any device.',
'Reach your customers wherever they are with our mobile app development expertise. We create intuitive, high-performance applications for iOS and Android that deliver seamless user experiences. From concept to launch, we handle the entire development lifecycle, including design, development, testing, and App Store deployment.',
'smartphone',
'["iOS & Android Development", "Cross-platform Solutions", "UI/UX Design", "Push Notifications", "Offline Functionality", "App Store Submission"]'::jsonb,
'Starting at $20,000',
ARRAY['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
true, 3, '2025-11-23T13:50:11.775653+00:00'::timestamptz),

('82026e5b-05ba-4636-9b0c-4fbd7a199fac', 'Desktop Applications', 'desktop-applications',
'Develop robust desktop software solutions for Windows, macOS, and Linux platforms.',
'Empower your business with custom desktop applications tailored to your specific workflows. We build powerful, secure desktop software that integrates seamlessly with your existing systems. Whether you need internal tools, enterprise software, or consumer applications, we deliver solutions that enhance productivity and user satisfaction.',
'monitor',
'["Cross-platform Development", "Native Performance", "System Integration", "Database Connectivity", "Secure Authentication", "Auto-updates"]'::jsonb,
'Starting at $15,000',
ARRAY['Electron', 'Tauri', 'C#', '.NET', 'Python', 'Qt'],
true, 4, '2025-11-23T13:50:11.775653+00:00'::timestamptz);
