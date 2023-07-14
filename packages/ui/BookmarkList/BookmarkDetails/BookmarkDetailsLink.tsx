import { FC, memo } from "react";
import styled from "styled-components";

type BookmarkDetailsLinkProps = {
  href?: string;
};

export const StyledLink = styled.a`
  background: #f0dc46; /* --saveday-yellow */
  border-radius: 5px;
  color: #101010; /* --saveday-black */
  display: block;
  font-size: 14px;
  margin-top: 12px;
  line-height: 24px;
  padding: 10px;
  word-break: break-all;
`;

export const StyledSvg = styled.svg`
  float: right;
`;

const BookmarkDetailsLink: FC<BookmarkDetailsLinkProps> = ({ href }) => {
  return (
    <StyledLink href={href} target="_blank">
      <StyledSvg
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
      </StyledSvg>
      {href}
    </StyledLink>
  );
};

export default memo(BookmarkDetailsLink);
