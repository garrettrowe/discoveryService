

import axios from "axios";
import Cookies from "js-cookie";
import { Config } from '../config'


axios.interceptors.request.use((config) => {
    // validate url
    if(!config.url || config.url === ''){
      return Promise.reject(`Url was not provided in the request`)
    }
    // normalize request url
    const requestUrl = config.url.startsWith('/') ? config.url : `/${config.url}`
    config.url = `${Config.baseUrlPath}${requestUrl}`
    return config
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  })

/**
 * Wrapper function for analytics click handler.
 * Send event based data to GA.
 *
 * @param {string} category Name of application analytics are coming from, based on applications url.
 * E.g. https://www.ibm.com/demos/collection/Watson-Speech-to-Text/Live/Product-Demo -> watson-speech-to-text-live-product-demo
 *
 * @return {function} Click handler to be passed to child component.
 * Child component responsible for sending back relevant analytics metadata
**/
export const analyticsWrapper = (category: string) => {
  return (options: any): void => {
    (<any>window).bluemixAnalytics.trackEvent('CTA Clicked', {
      CTA : "Get Started on IBM Cloud",
      productTitle: category,
      platformTitle: "IBM Demos",
      channel: "webpage",
      color: "blue",
      successFlag: true
    });
  }
}


export const authCookie: string = "";
export const keysCookie: string = "";

export const retrievePersistedState = (key: string): string => {
  return localStorage.getItem(key);
};

export const persistState = (key: string, state: any): Promise<void> => {
  localStorage.setItem(key, JSON.stringify(state));
  return Promise.resolve();
};

export const redirectToAuthServer = (callbackUrl: string) => { //<JPH> other apps have different redirectUrl flow
  axios.get("/api/authInfo").then(response => {
    const {
      data: { authServerUrl, parameters }
    } = response;
    const redirectUrl = new URL(authServerUrl);

    redirectUrl.searchParams.append("app_name", parameters.app_name);
    redirectUrl.searchParams.append("app_label", parameters.app_label);
    redirectUrl.searchParams.append("callback_url", callbackUrl);

    window.location.href = redirectUrl.href;
  });
};

export const getAuthTokenFromCookie = () => {
  return Cookies.get(authCookie);
};

export const setAuthCookie = (accessToken: string) => {
  Cookies.set(authCookie, accessToken, { expires: 1, path: Config.baseUrlPath });
};

export const removeAuthCookie = () => {
  Cookies.remove(authCookie, { path: Config.baseUrlPath })
};

export const getKeysFromCookie = () => {
  return Cookies.get(keysCookie);
};

// Response interceptor for HTTP Responses
axios.interceptors.response.use(null, (error) => {
  // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
  if (error.response) {
    // server returned a forbidden http code
    // user must authenticate
    if(error.response.status === 403){
      authenticationRedirect()
    } else {
      return Promise.reject(error.response)
    }
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
  }
});

export const authenticationRedirect = (mode?: string) => {
  // remove the cookie, it's no longer good
  removeAuthCookie()

  // get the redirect url for this application and its current mode
  axios.get(`/api/redirectUrl?mode=${mode}`).then((response) => {
    const { data: { redirectUrl } } = response
    window.location.href = redirectUrl
  })
}
