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
};

export type BookmarkImportSource = "TELEGRAM_FILE" | "URL";

export type BookmarkMetadata = {
  description?: string;
  title?: string;
};
