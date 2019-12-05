export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'https://purplerain2webapi20191205112931.azurewebsites.net':
    APIURL = 'https://purplerain2webapi20191205112931.azurewebsites.net'
    break;
  default:
    APIURL = 'https://localhost:44361';
}