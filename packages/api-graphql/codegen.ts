// eslint-disable-next-line import/no-extraneous-dependencies
import { type CodegenConfig } from "@graphql-codegen/cli";

export const productionUri =
  "https://api.caroot.app/api/v1/caroot-knowledge-management/graphql";

const config: CodegenConfig = {
  schema: productionUri,
  documents: ["src/*.ts"],
  generates: {
    "./gql/": {
      preset: "client",
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
