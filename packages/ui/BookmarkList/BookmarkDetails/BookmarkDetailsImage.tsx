import { FC, memo } from "react";
import type { BookmarkData } from "../bookmark_data";
import {
  BookmarkDetailsContainer,
  BookmarkDetailsTitle,
} from "./BookmarkDetails";
import BookmarkDetailsLink from "./BookmarkDetailsLink";

type BookmarkDetailsImageProps = {
  bookmark: BookmarkData;
};

const BookmarkDetailsImage: FC<BookmarkDetailsImageProps> = ({ bookmark }) => {
  const title = bookmark.metadata.title ?? "";

  return (
    <BookmarkDetailsContainer>
      <BookmarkDetailsTitle>
        {title.length > 0 ? title : "Image"}
      </BookmarkDetailsTitle>
      <BookmarkDetailsLink href={bookmark.url} />
    </BookmarkDetailsContainer>
  );
};

export default memo(BookmarkDetailsImage);
