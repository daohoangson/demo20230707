import { FC, memo } from "react";
import { BookmarkData } from "../bookmark_data";
import BookmarkIcon from "./BookmarkIcon";
import styled, { css } from "styled-components";

type BookmarkContentProps = {
  bookmark: BookmarkData;
};

const BookmarkContentContainer = styled.div`
  flex: 1;
`;

const BookmarkContentTitleText = css`
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  line-height: 140%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const BookmarkContentTitle = styled.div`
  ${BookmarkContentTitleText}

  margin-bottom: 5px;
  display: -webkit-box;
`;

const BookmarkContentTitleInline = styled.span`
  ${BookmarkContentTitleText}
`;

const BookmarkContentDescription = styled.div`
  color: variable.$saveday-grey-color;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const AudioContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImageContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContent = styled.img`
  width: 100%;
  max-width: 360px;
`;

const imageFallback = (event: React.SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = "/images/falback-img.svg";
};

const TextContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

// TODO:
const VideoContentContainer = AudioContentContainer;

const BookmarkContent: FC<BookmarkContentProps> = ({ bookmark }) => {
  switch (bookmark.contentType) {
    case "AUDIO":
      return (
        <AudioContentContainer>
          <BookmarkIcon contentType={bookmark.contentType} />
          <BookmarkContentTitleInline>
            {bookmark.metadata.title}
          </BookmarkContentTitleInline>
        </AudioContentContainer>
      );
    case "IMAGE":
      return (
        <BookmarkContentContainer>
          <BookmarkContentTitle>{bookmark.metadata.title}</BookmarkContentTitle>
          <ImageContentContainer>
            <ImageContent src={bookmark.url} onError={imageFallback} />
          </ImageContentContainer>
        </BookmarkContentContainer>
      );
    case "TEXT":
      if (bookmark.importSource === "TELEGRAM_FILE") {
        return (
          <TextContentContainer>
            <BookmarkIcon contentType={bookmark.contentType} />
            <BookmarkContentContainer>
              <BookmarkContentTitle>Note</BookmarkContentTitle>
              <BookmarkContentDescription>
                {bookmark.detailData?.content || "Note from Telegram"}
              </BookmarkContentDescription>
            </BookmarkContentContainer>
          </TextContentContainer>
        );
      }
      break;
    case "VIDEO":
      if (bookmark.importSource === "TELEGRAM_FILE") {
        return (
          <VideoContentContainer>
            <BookmarkIcon contentType={bookmark.contentType} />
            <BookmarkContentTitleInline>
              {bookmark.metadata.title}
            </BookmarkContentTitleInline>
          </VideoContentContainer>
        );
      }
      break;
  }

  return (
    <BookmarkContentContainer>
      <BookmarkContentTitle>{bookmark.metadata.title}</BookmarkContentTitle>
      <BookmarkContentDescription>
        {bookmark.metadata.description || bookmark.detailData?.content}
      </BookmarkContentDescription>
    </BookmarkContentContainer>
  );
};

export default memo(BookmarkContent);
