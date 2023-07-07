import { graphql } from "../gql/gql";

export const bioUserInfoQuery = graphql(/* GraphQL */ `
  query bioUserInfo($userName: String!) {
    bioUserInfo(userName: $userName) {
      userName
      displayName
      avatar
      bio
    }
  }
`);

export const bioBookmarkContentsQuery = graphql(/* GraphQL */ `
  query bioBookmarkContents($userName: String!, $pagination: LimitInput) {
    bioBookmarkContents(userName: $userName, pagination: $pagination) {
      id
      url
      metadata {
        ...ContentMetadataFragment
      }
      contentType
      importSource
      createdAt
      detailData
    }
  }
`);
