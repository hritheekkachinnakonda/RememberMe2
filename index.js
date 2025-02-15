// /**
//  * @format
//  */

// import { AppRegistry } from 'react-native';

// import App from './App';
// import { name as appName } from './app.json';
// import React from 'react';
// // import Amplify from 'aws-amplify';
// // import awsconfig from './src/aws-exports'; // Path to your AWS Amplify configuration
// // console.log(awsconfig); // Check the config object


// // Amplify.configure(awsconfig); // Configure AWS Amplify with the configuration file

// // AppRegistry.registerComponent(appName, () => App); // Register the app component
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App); // Register the app component
