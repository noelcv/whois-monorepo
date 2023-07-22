import { HelmetOptions } from 'helmet';
import CONTENT_SECURITY_POLICY from './csp';

const SECURITY_OPTIONS: HelmetOptions = {
  contentSecurityPolicy: CONTENT_SECURITY_POLICY,
  crossOriginEmbedderPolicy: true, //attention: change to false if decide to gather images from elsewhere
  crossOriginOpenerPolicy: { policy: 'same-origin' },
  crossOriginResourcePolicy: { policy: 'same-site' },
  dnsPrefetchControl: { allow: false }, //there is no need to prefetch any nested routes, in our project
  frameguard: { action: 'deny' }, //given we're not using frames, there is no reason to allow them to be loaded externally
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true }, //Avoid Man-in-the-Middle attacks: inform browser to automatically prefer https over http (1 year)
  ieNoOpen: true, //to avoid unsafe downloads on old browsers
  noSniff: true, //to avoid MIME-TYPE sniffing - enforce the MIME types from the Content-Type headers are followed and not changed
  permittedCrossDomainPolicies: { permittedPolicies: 'none' },
  referrerPolicy: { policy: 'same-origin' },
};

export default SECURITY_OPTIONS;
