import { graphql } from "../gql/gql";

export const ContentMetadataFragment = graphql(/* GraphQL */ `
  fragment ContentMetadataFragment on ContentMetadata {
    title
    description
  }
`);
