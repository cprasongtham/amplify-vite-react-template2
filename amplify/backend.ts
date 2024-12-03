import { defineBackend, secret } from "@aws-amplify/backend";
import { auth } from './auth/resource';
import { data } from './data/resource';

const SECRET_A = secret("SECRET_A");

defineBackend({
  auth,
  data,
  async customHandler(event, context) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secretValue: SECRET_A }),
    };
  },
});
