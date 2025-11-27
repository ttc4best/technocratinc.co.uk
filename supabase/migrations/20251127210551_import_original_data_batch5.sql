/*
  # Import Original Data - Batch 5: Case Studies (Part 2)
  
  This migration imports more case studies from the original database.
*/

INSERT INTO case_studies (id, title, slug, client, description, services, image_url, result, challenge, solution, technologies, is_featured, display_order, created_at) VALUES
('2bc8dfe3-7ec9-45fb-993d-c2518f680730', 'Enterprise Desktop Application for Financial Trading', 'tradepro-desktop-app', 'TradePro Analytics',
'Developed a high-performance desktop trading platform with real-time market data, advanced charting, algorithmic trading capabilities, and portfolio management for institutional traders.',
ARRAY['Desktop Applications', 'FinTech', 'Real-time Systems'],
'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg',
'• Processing 10,000+ trades daily
• Sub-50ms average execution time
• 99.99% uptime record
• 2,500+ professional traders using platform
• $500M+ in daily trading volume',
'TradePro needed a desktop application that could handle massive amounts of real-time data, provide advanced analysis tools, and execute trades with minimal latency. The application had to work reliably on Windows, macOS, and Linux.',
'We built a cross-platform desktop application using Electron with native modules for performance-critical operations. The platform features real-time WebSocket connections to exchanges, advanced charting with TradingView integration, custom algorithm builder, and comprehensive risk management tools.',
ARRAY['Electron', 'TypeScript', 'C++', 'WebSocket', 'PostgreSQL', 'Redis'],
true, 4, '2025-11-23T14:09:32.277509+00:00'::timestamptz),

('a8d86772-47ff-4a98-be84-addebabd1cc9', 'Multi-Cloud Infrastructure Migration & Optimization', 'globaltech-cloud-migration', 'GlobalTech Corp',
'Migrated a Fortune 500 company from on-premise infrastructure to a multi-cloud architecture spanning AWS and Azure, achieving significant cost savings and improved scalability.',
ARRAY['Cloud Integration', 'DevOps', 'Infrastructure'],
'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
'• 40% reduction in infrastructure costs
• Zero downtime during migration
• 99.99% availability achieved
• 75% faster deployment cycles
• Reduced disaster recovery time from 24hrs to 15min',
'GlobalTech had legacy on-premise infrastructure that was expensive to maintain and difficult to scale. They needed a phased migration strategy with zero downtime while optimizing costs and improving disaster recovery capabilities.',
'We designed a multi-cloud architecture using AWS as primary and Azure for redundancy. The migration included containerizing applications with Docker and Kubernetes, implementing infrastructure as code with Terraform, setting up CI/CD pipelines, and establishing comprehensive monitoring and alerting systems.',
ARRAY['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins'],
true, 5, '2025-11-23T14:09:32.277509+00:00'::timestamptz),

('fc6c836e-066c-4cc6-bc43-fa5e00431c3a', 'Real-Time Business Intelligence Dashboard', 'retailvision-bi-dashboard', 'RetailVision Analytics',
'Built a comprehensive analytics platform providing real-time insights into sales, inventory, and customer behavior across 500+ retail locations with predictive analytics capabilities.',
ARRAY['Analytics & Insights', 'Business Intelligence', 'Data Engineering'],
'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
'• Processing 10M+ transactions daily
• Real-time insights across 500+ locations
• 30% improvement in inventory accuracy
• $5M saved through demand forecasting
• Reduced out-of-stock incidents by 45%',
'RetailVision needed to consolidate data from multiple sources and provide actionable insights to regional managers in real-time. The system had to handle massive data volumes while providing intuitive visualizations.',
'We developed a modern analytics platform with data pipelines processing information from POS systems, inventory management, and CRM platforms. The dashboard features customizable widgets, automated reports, predictive analytics for demand forecasting, and mobile accessibility for on-the-go decision making.',
ARRAY['React', 'Python', 'Apache Kafka', 'Elasticsearch', 'Tableau', 'AWS'],
false, 6, '2025-11-23T14:09:32.277509+00:00'::timestamptz);
