console.log("hello")

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

ldClient.variation("hello");

ldClientVariation("hello");

console.log("hello");
