import { FC, memo, useCallback } from "react";
import type { BookmarkData } from "../bookmark_data";
import BookmarkContent from "./BookmarkContent";
import styled from "styled-components";

type BookmarkProps = {
  bookmark: BookmarkData;
  onDelete?: (bookmark: BookmarkData) => void;
  onViewDetail: (bookmark: BookmarkData) => void;
};

const BookmarkContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  margin-top: 8px;
`;

const BookmarkContainerInner = styled.div`
  cursor: pointer;
  background-color: #f7f7f7;
  border-radius: 12px;
  flex: 1;
  padding: 10px;
`;

const BookmarkHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

const BookmarkBody = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 8px;
`;

const BookmarkItemDelete = styled.span`
  display: flex;
  padding: 3px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  background: variable.$saveday-offwhite-color;
  color: variable.$saveday-grey-color;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

const BookmarkItemSource = styled.span`
  color: variable.$saveday-grey-color;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Bookmark: FC<BookmarkProps> = ({ bookmark, onDelete, onViewDetail }) => {
  const deleteCallback = useCallback(
    () => (typeof onDelete === "function" ? onDelete(bookmark) : null),
    [bookmark, onDelete]
  );
  const viewDetailCallback = useCallback(
    () => onViewDetail(bookmark),
    [bookmark, onViewDetail]
  );

  return (
    <BookmarkContainer>
      <BookmarkContainerInner>
        <BookmarkHeader>
          <BookmarkItemSource onClick={viewDetailCallback}>
            {typeof bookmark.source === "string" && (
              <span>{bookmark.source}</span>
            )}
          </BookmarkItemSource>
          {typeof onDelete === "function" && (
            <BookmarkItemDelete onClick={deleteCallback}>
              Delete
            </BookmarkItemDelete>
          )}
        </BookmarkHeader>
        <BookmarkBody onClick={viewDetailCallback}>
          <BookmarkContent bookmark={bookmark} />
        </BookmarkBody>
      </BookmarkContainerInner>
    </BookmarkContainer>
  );
};

export default memo(Bookmark);
