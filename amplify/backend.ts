import { defineBackend, secret } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

const mySecret = secret("SECRET_A");

defineBackend({
  auth,
  data,
  custom: async () => {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secretValue: mySecret }),
    };
  },
});
