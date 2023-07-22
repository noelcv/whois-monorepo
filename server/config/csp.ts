const CONTENT_SECURITY_POLICY: object = {
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'", 'whois-monorepo-client.vercel.app/*'],
    scriptSrc: ["'self'", 'whois-monorepo-client.vercel.app/*'],
    connectSrc: ["'self'", 'https://whois-monorepo-client.vercel.app/*'],
    baseUri: ["'self'"],
    formAction: ["'self'"],
    styleSrc: ["'self'"],
    fontSrc: ["'self'"],
    sandbox: ['allow-forms', 'allow-scripts'],
    reportUri: '/report-violation',
  },
  reportOnly: true,
};
// default-src 'none';

export default CONTENT_SECURITY_POLICY;
