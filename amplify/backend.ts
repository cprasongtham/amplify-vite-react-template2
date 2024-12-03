import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { secretA } from "./secret/resource";




defineBackend({
  auth,
  data,
  secretA,
});
