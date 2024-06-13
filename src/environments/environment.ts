// environment.ts (for development)
export const environment = {
  production: false, //for local development
  userUrl: 'http://172.16.115.22:8080/user-api/User/',
  calibrationUrl: 'http://172.16.115.22:8080/calibration-api/Calibration/',
  filesUrl: 'http://172.16.115.22:8080/calibration-api/Instruments/',
  authUrl: 'http://172.16.115.22:8280/Auth/',

/*  production: true,
  userUrl: 'http://localhost:8080/user-api/User/',
  calibrationUrl: 'http://localhost:8080/calibration-api/Calibration/',
  filesUrl: 'https://localhost:8080/calibration-api/Instruments/',
  authUrl: 'http://localhost:8280/Auth/',*/
/*  production: true,
  userUrl: 'http://172.16.115.22:8080/user-api/User/',
  calibrationUrl: 'http://172.16.115.22:8080/calibration-api/Calibration/',
  filesUrl: 'http://172.16.115.22:8080/calibration-api/Instruments/',
  authUrl: 'http://172.16.115.22:8280/Auth/',*/
};
