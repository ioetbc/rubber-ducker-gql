import type {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5001/rubber-ducker-api-v2/us-central1/graphql",
  generates: {
    "generated/graphql-backend.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
