export type BookmarkContentType =
  | "AUDIO"
  | "DOCUMENT"
  | "IMAGE"
  | "TEXT"
  | "VIDEO";

export type BookmarkData = {
  contentType: BookmarkContentType;
  detailData?: BookmarkDetailData;
  id: string;
  importSource: BookmarkImportSource;
  metadata: BookmarkMetadata;
  source?: string;
  url?: string;
};

export type BookmarkDetailData = {
  content?: string;
  keynotes?: string;
};

export type BookmarkImportSource = "TELEGRAM_FILE" | "URL";

export type BookmarkMetadata = {
  __typename?: "ContentMetadata";
  description?: string;
  title?: string;
};
