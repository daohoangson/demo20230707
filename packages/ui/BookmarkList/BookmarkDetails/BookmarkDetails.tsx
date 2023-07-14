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

const BookmarkDetailsLink = styled.a`
  background: #f0dc46; /* --saveday-yellow */
  border-radius: 5px;
  color: #101010; /* --saveday-black */
  display: block;
  font-size: 14px;
  margin-top: 12px;
  line-height: 24px;
  padding: 10px;
`;

const BookmarkDetailsLinkIcon = styled.svg`
  float: right;
`;

const BookmarkDetailsKeyPointsHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  line-height: 20px;
`;

const BookmarkDetailsKeyPoints = styled.div`
  margin-top: 30px;
`;

const BookmarkDetails: FC<BookmarkDetailsProps> = ({ bookmark }) => {
  const keyPoints = bookmark.detailData?.keynotes ?? "";

  return (
    <BookmarkDetailsContainer>
      <BookmarkDetailsTitle>{bookmark.metadata.title}</BookmarkDetailsTitle>
      <BookmarkDetailsDescription>
        {bookmark.metadata.description}
      </BookmarkDetailsDescription>
      <BookmarkDetailsLink href={bookmark.url} target="_blank">
        <BookmarkDetailsLinkIcon
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4.69764 19.3024C4.22892 18.8337 4.22916 18.0739 4.69764 17.6054L15.5573 6.7457L6.34748 6.74546C5.6846 6.74546 5.14764 6.2085 5.14764 5.54562C5.14764 5.21418 5.28188 4.91418 5.499 4.69706C5.71612 4.47994 6.01604 4.3457 6.34756 4.3457L18.4543 4.34594C19.1169 4.3457 19.6544 4.88314 19.6541 5.54578L19.6544 17.6525C19.6544 18.3154 19.1174 18.8523 18.4545 18.8523C17.7919 18.8526 17.2547 18.3154 17.2547 17.6525L17.2544 8.44266L6.39476 19.3023C5.92628 19.7708 5.16636 19.7711 4.69764 19.3024Z"
            fill="#231F20"
          />
        </BookmarkDetailsLinkIcon>
        {bookmark.url}
      </BookmarkDetailsLink>

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
