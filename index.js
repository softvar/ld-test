const LaunchDarkly = require('launchdarkly-node-server-sdk');

ldClient = LaunchDarkly.init("sdk-87250f4d-0bd5-426c-8a16-8923583c9991");

ldClient.once("ready", () => {
  ldClient.variation("hello", {"key": "user@test.com"}, false,
    (err, showFeature) => {
      if (showFeature) {
        // application code to show the feature
      } else {
        // the code to run if the feature is off
      }
    });
});
