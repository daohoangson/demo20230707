import { FC, memo } from "react";
import type { BookmarkData } from "../bookmark_data";
import styled from "styled-components";
import BookmarkDetailsImage from "./BookmarkDetailsImage";
import BookmarkDetailsLink from "./BookmarkDetailsLink";

type BookmarkDetailsProps = {
  bookmark: BookmarkData;
};

export const BookmarkDetailsContainer = styled.div``;

export const BookmarkDetailsTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;

const BookmarkDetailsDescription = styled.div`
  font-size: 16px;
  margin-top: 12px;
  line-height: 22.4px;
`;

const BookmarkDetailsKeyPointsHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  line-height: 20px;
`;

const BookmarkDetailsKeyPoints = styled.div`
  margin-top: 30px;
  white-space: pre;
`;

const BookmarkDetails: FC<BookmarkDetailsProps> = ({ bookmark }) => {
  const keyPoints = bookmark.detailData?.keynotes ?? "";

  console.log({ bookmark });
  if (bookmark.contentType === "IMAGE") {
    return <BookmarkDetailsImage bookmark={bookmark} />;
  }

  return (
    <BookmarkDetailsContainer>
      <BookmarkDetailsTitle>{bookmark.metadata.title}</BookmarkDetailsTitle>
      <BookmarkDetailsDescription>
        {bookmark.metadata.description}
      </BookmarkDetailsDescription>
      <BookmarkDetailsLink href={bookmark.url} />

      {keyPoints.length > 0 && (
        <BookmarkDetailsKeyPointsHeader>
          Key points
        </BookmarkDetailsKeyPointsHeader>
      )}
      {keyPoints.length > 0 && (
        <BookmarkDetailsKeyPoints>{keyPoints}</BookmarkDetailsKeyPoints>
      )}
    </BookmarkDetailsContainer>
  );
};

export default memo(BookmarkDetails);
