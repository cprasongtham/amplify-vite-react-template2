import { defineBackend, secret, function as amplifyFunction } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

const mySecret = secret("SECRET_A");

defineBackend({
  auth,
  data,
  function: amplifyFunction({
    name: "getSecretFunction",
    handler: async () => {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ secretValue: mySecret }),
      };
    },
    environment: {},
  }),
});
