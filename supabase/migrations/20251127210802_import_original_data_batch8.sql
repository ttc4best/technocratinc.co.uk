/*
  # Import Original Data - Batch 8: Blog Posts (Part 2)
  
  This migration imports more blog posts from the original database.
*/

INSERT INTO blog_posts (id, title, slug, excerpt, content, author_name, category, tags, is_published, published_at, reading_time, created_at) VALUES
('b3c4d5e6-f7a8-4b9c-0d1e-2f3a4b5c6d7e',
'Mobile App Security Best Practices',
'mobile-app-security-best-practices',
'Protecting user data and ensuring app security is crucial. Here are the essential security practices every mobile developer should implement.',
'Mobile apps handle sensitive user data, making security paramount. A single breach can destroy user trust and your reputation.

## Secure Data Storage

**Never Store Sensitive Data in Plain Text**

Use platform-specific secure storage:
- iOS: Keychain Services
- Android: Android Keystore

**Encrypt Everything**

Even data stored in secure storage should be encrypted. Use AES-256 for local encryption.

## Network Security

### HTTPS Only

Always use HTTPS for all network communications. Never allow HTTP fallback.

### Certificate Pinning

Implement SSL certificate pinning to prevent man-in-the-middle attacks:

```
// iOS Example
let serverTrustPolicy = ServerTrustPolicy.pinCertificates(
    certificates: ServerTrustPolicy.certificates(),
    validateCertificateChain: true,
    validateHost: true
)
```

### API Security

- Use OAuth 2.0 for authentication
- Implement refresh tokens
- Add rate limiting
- Validate all inputs
- Use API gateways

## Authentication Best Practices

**Biometric Authentication**

Leverage device biometrics (Face ID, Touch ID, fingerprint) for quick, secure access.

**Multi-Factor Authentication**

Require 2FA for sensitive operations:
- Financial transactions
- Account settings changes
- Data exports

**Session Management**

- Implement automatic timeouts
- Invalidate tokens on logout
- Store tokens securely
- Use short-lived access tokens

## Code Security

**Obfuscation**

Make reverse engineering difficult:
- Obfuscate code
- Remove debug symbols
- Use ProGuard (Android) or similar tools

**Anti-Tampering**

Detect if your app has been:
- Debugged
- Modified
- Running on rooted/jailbroken devices

## Input Validation

**Never Trust User Input**

Validate everything:
- Length limits
- Type checking
- Special character handling
- SQL injection prevention
- XSS prevention

## Third-Party Libraries

**Audit Dependencies**

Regularly audit and update third-party libraries:
- Check for known vulnerabilities
- Use dependency scanning tools
- Keep libraries updated
- Remove unused dependencies

## Logging and Monitoring

**Careful What You Log**

Never log:
- Passwords
- API keys
- Personal information
- Credit card numbers
- Session tokens

**Monitor for Threats**

- Failed login attempts
- Unusual access patterns
- API abuse
- Crash reports

## Testing

**Security Testing**

- Penetration testing
- Vulnerability scanning
- Code reviews
- Static analysis
- Dynamic analysis

## Compliance

Ensure compliance with:
- GDPR (Europe)
- CCPA (California)
- HIPAA (Healthcare)
- PCI DSS (Payment cards)

## Incident Response

Have a plan for security incidents:
1. Detect the breach
2. Contain the damage
3. Assess the impact
4. Notify affected users
5. Fix the vulnerability
6. Learn and improve

## Conclusion

Security isn''t a one-time task—it''s an ongoing commitment. Stay informed about new threats, regularly update your security practices, and always prioritize user privacy.',
'Michael Chen',
'Mobile Development',
ARRAY['Security', 'Mobile', 'Best Practices'],
true,
'2025-11-08T09:00:00+00:00'::timestamptz,
12,
'2025-11-08T09:00:00+00:00'::timestamptz);
