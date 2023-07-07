import { FC, memo } from "react";
import { BookmarkContentType } from "./bookmark_data";
import { styled } from "styled-components";

type BookmarkIconProps = {
  contentType: BookmarkContentType;
};

const BookmarkIconImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
`;

const BookmarkIcon: FC<BookmarkIconProps> = ({ contentType }) => {
  let src: string;
  switch (contentType) {
    case "AUDIO":
      src = "/images/input-radio.svg";
      break;
    case "IMAGE":
      src = "/images/input-image.png";
      break;
    case "TEXT":
      src = "/images/input-text.png";
      break;
    case "VIDEO":
      src = "/images/input-video.svg";
      break;
    default:
      src = "/images/input-file.png";
      break;
  }

  return <BookmarkIconImage src={src} alt="data type icon" />;
};

export default memo(BookmarkIcon);
