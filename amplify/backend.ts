import { defineBackend, secret, FunctionHandler } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

const mySecret = secret("SECRET_A");

// Define the handler function explicitly
const customHandler: FunctionHandler = async () => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ secretValue: mySecret }),
  };
};

defineBackend({
  auth,
  data,
  custom: {
    name: "CustomHandler",
    handler: customHandler,
  },
});
