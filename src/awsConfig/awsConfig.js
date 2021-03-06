import Amplify, {Auth} from 'aws-amplify';
import {config} from './aws-exports';

const awsConfig = () => {
  // Amplify.configure({
  //   Auth: {
  //     // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
  //     //   identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

  //     // REQUIRED - Amazon Cognito Region
  //     region: 'us-east-1',

  //     // OPTIONAL - Amazon Cognito Federated Identity Pool Region
  //     // Required only if it's different from Amazon Cognito Region
  //     //   identityPoolRegion: 'XX-XXXX-X',

  //     // OPTIONAL - Amazon Cognito User Pool ID
  //     userPoolId: 'us-east-1_0Naz98i8Z',

  //     // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  //     userPoolWebClientId: '2i22m1tlomeqlr4mol9urtu3f',

  //     // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
  //     mandatorySignIn: false,

  //     // OPTIONAL - Configuration for cookie storage
  //     // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
  //     //   cookieStorage: {
  //     //     // REQUIRED - Cookie domain (only required if cookieStorage is provided)
  //     //     domain: '.yourdomain.com',
  //     //     // OPTIONAL - Cookie path
  //     //     path: '/',
  //     //     // OPTIONAL - Cookie expiration in days
  //     //     expires: 365,
  //     //     // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
  //     //     sameSite: 'strict' | 'lax',
  //     //     // OPTIONAL - Cookie secure flag
  //     //     // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
  //     //     secure: true,
  //     //   },

  //     // OPTIONAL - customized storage object
  //     //   storage: MyStorage,

  //     // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
  //     authenticationFlowType: 'USER_PASSWORD_AUTH',

  //     // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
  //     //   clientMetadata: {myCustomKey: 'myCustomValue'},

  //     //   // OPTIONAL - Hosted UI configuration
  //     //   oauth: {
  //     //     domain: 'your_cognito_domain',
  //     //     scope: [
  //     //       'phone',
  //     //       'email',
  //     //       'profile',
  //     //       'openid',
  //     //       'aws.cognito.signin.user.admin',
  //     //     ],
  //     //     redirectSignIn: 'http://localhost:3000/',
  //     //     redirectSignOut: 'http://localhost:3000/',
  //     //     responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
  //     //   },
  //   },
  // });
  Amplify.configure(config);
  // You can get the current config object
  const currentConfig = Auth.configure();
  console.log('Auth Config : ', currentConfig);
};
export default awsConfig;
