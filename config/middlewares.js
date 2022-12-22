module.exports = ({ env }) => {
  // Options: local, aws-s3
  const uploadProvider = env('UPLOAD_PROVIDER', 'local');
  let config = []
  switch (uploadProvider) {
    case 'aws-s3':
      config =  [
        'strapi::errors',
        {
          name: 'strapi::security',
          config: {
            contentSecurityPolicy: {
              useDefaults: true,
              directives: {
                'connect-src': ["'self'", 'https:'],
                'img-src': ["'self'", 'data:', 'blob:', `${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`],
                'media-src': ["'self'", 'data:', 'blob:', `${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`],
                upgradeInsecureRequests: null,
              },
            },
          },
        },
        'strapi::cors',
        'strapi::poweredBy',
        'strapi::logger',
        'strapi::query',
        'strapi::body',
        'strapi::session',
        'strapi::favicon',
        'strapi::public',
      ];
      break;
    default:
      config =  [
        'strapi::errors',
        {
          name: 'strapi::security',
          config: {
            contentSecurityPolicy: {
              useDefaults: true,
              directives: {
                'connect-src': ["'self'", 'https:'],
                'img-src': ["'self'", 'data:', 'blob:', process.env.STORAGE_URL, process.env.STORAGE_CDN_URL],
                'media-src': ["'self'", 'data:', 'blob:', process.env.STORAGE_URL, process.env.STORAGE_CDN_URL],
                upgradeInsecureRequests: null,
              },
            },
          },
        },
        'strapi::cors',
        'strapi::poweredBy',
        'strapi::logger',
        'strapi::query',
        'strapi::body',
        'strapi::session',
        'strapi::favicon',
        'strapi::public',
      ];
      break;
  }

  return config;
};
