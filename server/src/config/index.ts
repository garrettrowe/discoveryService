


if (process.env.NODE_ENV !== 'production') {
  //only load the .env file if we're not in prod
  require('dotenv').config()
}

export const Config = {
  port: process.env.PORT || 3000,
  app: process.env.CF_APP_NAME || 'app',
  appLabel: process.env.CF_APP_LABEL || '',
  hostname: process.env.CF_HOSTNAME || 'http://localhost:7000',
  environment: process.env.CF_ENVIRONMENT || 'local',
  STATIC_FILE_PATH: process.env.STATIC_FILE_PATH || '/home/vcap/app/dist/',
  REACT_APP_URL_PATH: process.env.REACT_APP_URL_PATH || '',
  appGateway: process.env.GATEWAY_SERVER_URL,
  configCookieName: process.env.CONFIG_COOKIE_NAME || 'dte-watson-discovery-expert-assist',

  assetDetails: {
    ibmDemosUrl: process.env.IBM_DEMOS_ASSET_URL,
    ibmEmbeddedUrl: process.env.IBM_EMBEDDED_ASSET_URL
  },


 
  commonLogin: {
    authServerUrl: process.env.GATEWAY_SERVER_URL || 'http://localhost:7700',
    bypassIbmDemosAuth: process.env.BYPASS_IBM_DEMOS_AUTH || 'true',
    secret: process.env.AUTH_SECRET_KEY
  },

  discovery: {
    DISCOVERY_API_KEY: process.env.DISCOVERY_API_KEY,
    DISCOVERY_ENV: process.env.DISCOVERY_ENV,
    DISCOVERY_ENG_COLLECTION: process.env.DISCOVERY_ENG_COLLECTION,
    DISCOVERY_AUTO_COLLECTION: process.env.DISCOVERY_AUTO_COLLECTION,
    DISCOVERY_CUSTOM_API_KEY: process.env.DISCOVERY_CUSTOM_API_KEY,
    DISCOVERY_CUSTOM_ENV: process.env.DISCOVERY_CUSTOM_ENV,
    DISCOVERY_CUSTOM_COLLECTION: process.env.DISCOVERY_CUSTOM_COLLECTION
  },
  //should get this from the client.  should be removed...
  cos: {
    COS_ENDPOINT : process.env.COS_ENDPOINT,
    COS_API_KEY : process.env.COS_API_KEY,
    COS_IBM_AUTH_ENDPOINT : process.env.COS_IBM_AUTH_ENDPOINT,
    COS_SERVICE_INSTANCE_ID : process.env.COS_SERVICE_INSTANCE_ID,
    COS_BUCKET : process.env.COS_BUCKET
  }

}

