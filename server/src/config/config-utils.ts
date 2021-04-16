import { Config } from '../config'
import * as URL from 'url'

const { hostname, environment, app, appLabel,configCookieName, assetDetails: { ibmDemosUrl, ibmEmbeddedUrl }, commonLogin: { authServerUrl, bypassIbmDemosAuth, secret } } = Config


export const getRedirectUrl = (mode: string, referer: string): string => {
    let redirectUrl = bypassIbmDemosAuth == 'true' ? getAuthServerUrl(referer) : ibmDemosUrl
    return redirectUrl
  }

  const getAuthServerUrl = (referer: string): string => {

    const payload = {
      customClaims:  {
        user: { username: 'admin', ibmer: true },
        role: {}
      }
    }
    const authServerRedirectUrl = new URL.URL(authServerUrl)

    authServerRedirectUrl.searchParams.append('app_name', app)
    authServerRedirectUrl.searchParams.append('app_label', appLabel)
    authServerRedirectUrl.searchParams.append('callback_url', referer ? referer : hostname)
    authServerRedirectUrl.searchParams.append('config_cookie', configCookieName)
    return authServerRedirectUrl.href
  }
