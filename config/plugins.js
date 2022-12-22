module.exports = ({ env }) => {
  // Options: local, aws-s3
  const uploadProvider = env('UPLOAD_PROVIDER', 'local');
  let uploadConfig = {}

  switch (uploadProvider) {
    case 'aws-s3':
      uploadConfig =  {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_S3_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      };
      break;
    default:
      uploadConfig = {
        provider: 'local',
        providerOptions: {
          maxage: env.int('LOCAL_MAX_AGE', 300000),
          sizeLimit: env.int('LOCAL_SIZE_LIMIT', 250000),
        },
        breakpoints: {
          xlarge: env.int('LOCAL_BREAKPOINT_XLARGE', 1920),
          large: env.int('LOCAL_BREAKPOINT_LARGE', 1000),
          medium: env.int('LOCAL_BREAKPOINT_MEDIUM', 750),
          small: env.int('LOCAL_BREAKPOINT_SMALL', 500),
          xsmall: env.int('LOCAL_BREAKPOINT_XSMALL', 64),
        },
      };
      break;
  }

  return {
    upload: {
      config: uploadConfig,
    },
  };
};

