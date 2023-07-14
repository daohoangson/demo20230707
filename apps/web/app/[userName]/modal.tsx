import { FC } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { BookmarkDetails } from "ui";
import { BookmarkData } from "ui/BookmarkList/bookmark_data";

type BiolinkModal = {
  bookmark: BookmarkData;
  onDismiss: () => void;
};

const AppBar = styled.div`
  background: #f0dc46; /* --saveday-yellow */
  padding: 12px;
`;

const AppBarSvg = styled.svg`
  display: block;
`;

const Body = styled.div`
  margin: 10px;
`;

const StyledModal = styled(Modal)`
  background: white;
  height: 100%;
  overflow: scroll;
  width: 100%;
`;

function onAfterOpen() {
  document.body.style.overflow = "hidden";
}

function onAfterClose() {
  document.body.style.overflow = "unset";
}

export const BiolinkModal: FC<BiolinkModal> = ({ bookmark, onDismiss }) => {
  return (
    <StyledModal
      // TODO: setup Modal.setAppElement
      ariaHideApp={false}
      isOpen={bookmark !== null}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
    >
      <AppBar onClick={onDismiss}>
        <AppBarSvg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M26 15.3967C26 16.1027 25.4275 16.6748 24.7218 16.6748H8.36367L15.3 23.6115C15.7992 24.1108 15.7992 24.9197 15.3 25.4189C15.0503 25.6686 14.7233 25.7934 14.3963 25.7934C14.0694 25.7934 13.7423 25.6686 13.4927 25.4189L4.37444 16.3003C3.87519 15.8015 3.87519 14.9918 4.37444 14.4929L13.4926 5.37444C13.9918 4.87519 14.8007 4.87519 15.3 5.37444C15.7992 5.87326 15.7992 6.68259 15.3 7.18184L8.36367 14.1185H24.7218C25.4275 14.1185 26 14.6906 26 15.3967Z"
            fill="#101010"
          />
        </AppBarSvg>
      </AppBar>
      <Body>
        {bookmark !== null && <BookmarkDetails bookmark={bookmark} />}
      </Body>
    </StyledModal>
  );
};
