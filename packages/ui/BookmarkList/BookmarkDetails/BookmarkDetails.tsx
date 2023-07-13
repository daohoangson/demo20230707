import { FC, memo } from "react";
import type { BookmarkData } from "../bookmark_data";
import styled from "styled-components";

type BookmarkDetailsProps = {
  bookmark: BookmarkData;
};

const BookmarkDetailsContainer = styled.div``;

const BookmarkDetailsTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;

const BookmarkDetailsDescription = styled.div`
  font-size: 16px;
  margin-top: 12px;
  line-height: 22.4px;
`;

const BookmarkDetails: FC<BookmarkDetailsProps> = ({ bookmark }) => {
  return (
    <BookmarkDetailsContainer>
      <BookmarkDetailsTitle>{bookmark.metadata.title}</BookmarkDetailsTitle>
      <BookmarkDetailsDescription>
        {bookmark.metadata.description}
      </BookmarkDetailsDescription>
    </BookmarkDetailsContainer>
  );
};

export default memo(BookmarkDetails);
