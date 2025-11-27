/*
  # Import FAQs - Part 3 (Final)
  
  This migration imports the remaining FAQs from the original database.
*/

INSERT INTO faqs (id, category, question, answer, display_order, is_active, created_at, updated_at) VALUES
('e1f2a3b4-c5d6-4789-e0f1-a2b3c4d5e6f7', 'Process', 'Will we own the code and designs?',
'Yes, absolutely! Upon final payment, you receive complete ownership of all code, designs, documentation, and deliverables. We provide full source code access, transfer all relevant accounts and assets, ensure no vendor lock-in, and include comprehensive documentation. Your intellectual property remains yours, and you have the freedom to modify, extend, or migrate the code as needed.',
11, true, NOW(), NOW()),

('f2a3b4c5-d6e7-4890-f1a2-b3c4d5e6f7a8', 'Process', 'Do you sign NDAs and confidentiality agreements?',
'Absolutely. We understand the importance of protecting your intellectual property and business ideas. We are happy to sign NDAs and confidentiality agreements before discussing your project details. We take data security and client confidentiality very seriously and have strict internal policies to protect sensitive information.',
12, true, NOW(), NOW()),

('a3b4c5d6-e7f8-4901-a2b3-c4d5e6f7a8b9', 'Support', 'What happens if something breaks after launch?',
'All projects include a warranty period (typically 30-90 days) where we fix any bugs or issues at no additional cost. After the warranty period, we offer various support packages for ongoing maintenance, bug fixes, and updates. We also provide emergency support options for critical issues. Our goal is to ensure your application runs smoothly long after launch.',
13, true, NOW(), NOW()),

('b4c5d6e7-f8a9-4012-b3c4-d5e6f7a8b9c0', 'General', 'Can you help with an existing project that another company started?',
'Yes, we regularly help clients who need assistance with projects started by other developers or agencies. We can perform code audits, identify issues, complete unfinished work, fix bugs, add new features, improve performance, or completely rebuild if necessary. We will provide an honest assessment and recommendation for the best path forward.',
14, true, NOW(), NOW()),

('c5d6e7f8-a9b0-4123-c4d5-e6f7a8b9c0d1', 'Technical', 'How do you ensure the security of our application?',
'Security is a top priority in everything we build. We follow industry best practices including secure coding standards, encryption for sensitive data, regular security audits and penetration testing, OWASP Top 10 compliance, secure authentication and authorization, protection against common vulnerabilities (SQL injection, XSS, CSRF), regular dependency updates, and compliance with relevant regulations (GDPR, HIPAA, PCI-DSS). We also provide security training and documentation.',
15, true, NOW(), NOW());
