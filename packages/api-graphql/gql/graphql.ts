/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Decimal: { input: any; output: any };
  Json: { input: any; output: any };
};

export type AudioData = {
  __typename?: "AudioData";
  keynotes?: Maybe<Scalars["String"]["output"]>;
  transcription?: Maybe<Scalars["String"]["output"]>;
};

export type BookmarkContent = {
  __typename?: "BookmarkContent";
  contentType: ContentType;
  createdAt: Scalars["String"]["output"];
  detailData: Scalars["Json"]["output"];
  id: Scalars["String"]["output"];
  importSource: ImportSource;
  metadata: ContentMetadata;
  url: Scalars["String"]["output"];
};

export type BookmarkFilter = {
  contentType?: InputMaybe<ContentType>;
};

export type ContentMetadata = {
  __typename?: "ContentMetadata";
  description?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export enum ContentType {
  Audio = "AUDIO",
  Document = "DOCUMENT",
  Image = "IMAGE",
  Text = "TEXT",
  Video = "VIDEO",
}

export type ImageData = {
  __typename?: "ImageData";
  description?: Maybe<Scalars["String"]["output"]>;
};

export enum ImportSource {
  TelegramFile = "TELEGRAM_FILE",
  Url = "URL",
}

export type IndexOrderInput = {
  orderField: Scalars["String"]["input"];
  orderType?: InputMaybe<IndexOrderType>;
};

export enum IndexOrderType {
  Asc = "ASC",
  Desc = "DESC",
}

export type LimitInput = {
  fromId?: InputMaybe<Scalars["String"]["input"]>;
  limit: Scalars["Int"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  deleteBookmarkContent: Scalars["String"]["output"];
  generateBioInfo: Scalars["String"]["output"];
  undoDeleteBookmarkContent: Scalars["String"]["output"];
  updateBioInfo: Scalars["String"]["output"];
  updateImageDescription: Scalars["String"]["output"];
  updateKeyNotes: Scalars["String"]["output"];
};

export type MutationDeleteBookmarkContentArgs = {
  bookmarkContentId: Scalars["String"]["input"];
  validUndoTime?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationUndoDeleteBookmarkContentArgs = {
  bookmarkContentId: Scalars["String"]["input"];
};

export type MutationUpdateBioInfoArgs = {
  input?: InputMaybe<UpdateBioInfo>;
};

export type MutationUpdateImageDescriptionArgs = {
  bookmarkContentId: Scalars["String"]["input"];
  description: Scalars["String"]["input"];
};

export type MutationUpdateKeyNotesArgs = {
  bookmarkContentId: Scalars["String"]["input"];
  keynotes: Scalars["String"]["input"];
};

export type PaginationInput = {
  page: Scalars["Int"]["input"];
  pageSize: Scalars["Int"]["input"];
};

export type Query = {
  __typename?: "Query";
  bioBookmarkContent?: Maybe<BookmarkContent>;
  bioBookmarkContents: Array<Maybe<BookmarkContent>>;
  bioUserInfo?: Maybe<UserInfo>;
  bookmarkContent?: Maybe<BookmarkContent>;
  bookmarkContents: Array<Maybe<BookmarkContent>>;
};

export type QueryBioBookmarkContentArgs = {
  bookmarkContentId: Scalars["String"]["input"];
  userName: Scalars["String"]["input"];
};

export type QueryBioBookmarkContentsArgs = {
  bookmarkFilter?: InputMaybe<BookmarkFilter>;
  order?: InputMaybe<IndexOrderInput>;
  pagination?: InputMaybe<LimitInput>;
  userName: Scalars["String"]["input"];
};

export type QueryBioUserInfoArgs = {
  userName: Scalars["String"]["input"];
};

export type QueryBookmarkContentArgs = {
  bookmarkContentId: Scalars["String"]["input"];
};

export type QueryBookmarkContentsArgs = {
  bookmarkFilter?: InputMaybe<BookmarkFilter>;
  order?: InputMaybe<IndexOrderInput>;
  pagination?: InputMaybe<LimitInput>;
};

export type TextData = {
  __typename?: "TextData";
  content?: Maybe<Scalars["String"]["output"]>;
  keynotes?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type UserInfo = {
  __typename?: "UserInfo";
  avatar?: Maybe<Scalars["String"]["output"]>;
  bio?: Maybe<Scalars["String"]["output"]>;
  displayName: Scalars["String"]["output"];
  userName: Scalars["String"]["output"];
};

export type VideoData = {
  __typename?: "VideoData";
  keynotes?: Maybe<Scalars["String"]["output"]>;
  transcription?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateBioInfo = {
  bio?: InputMaybe<Scalars["String"]["input"]>;
  displayName?: InputMaybe<Scalars["String"]["input"]>;
  userName?: InputMaybe<Scalars["String"]["input"]>;
};

export type BioUserInfoQueryVariables = Exact<{
  userName: Scalars["String"]["input"];
}>;

export type BioUserInfoQuery = {
  __typename?: "Query";
  bioUserInfo?: {
    __typename?: "UserInfo";
    userName: string;
    displayName: string;
    avatar?: string | null;
    bio?: string | null;
  } | null;
};

export type BioBookmarkContentsQueryVariables = Exact<{
  userName: Scalars["String"]["input"];
  pagination?: InputMaybe<LimitInput>;
}>;

export type BioBookmarkContentsQuery = {
  __typename?: "Query";
  bioBookmarkContents: Array<{
    __typename?: "BookmarkContent";
    id: string;
    url: string;
    contentType: ContentType;
    importSource: ImportSource;
    createdAt: string;
    detailData: any;
    metadata: { __typename?: "ContentMetadata" } & {
      " $fragmentRefs"?: {
        ContentMetadataFragmentFragment: ContentMetadataFragmentFragment;
      };
    };
  } | null>;
};

export type ContentMetadataFragmentFragment = {
  __typename?: "ContentMetadata";
  title?: string | null;
  description?: string | null;
} & { " $fragmentName"?: "ContentMetadataFragmentFragment" };

export const ContentMetadataFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentMetadataFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentMetadata" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContentMetadataFragmentFragment, unknown>;
export const BioUserInfoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "bioUserInfo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bioUserInfo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userName" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "userName" } },
                { kind: "Field", name: { kind: "Name", value: "displayName" } },
                { kind: "Field", name: { kind: "Name", value: "avatar" } },
                { kind: "Field", name: { kind: "Name", value: "bio" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BioUserInfoQuery, BioUserInfoQueryVariables>;
export const BioBookmarkContentsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "bioBookmarkContents" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "LimitInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bioBookmarkContents" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userName" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "metadata" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: {
                          kind: "Name",
                          value: "ContentMetadataFragment",
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "contentType" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "importSource" },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "detailData" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentMetadataFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ContentMetadata" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  BioBookmarkContentsQuery,
  BioBookmarkContentsQueryVariables
>;
