"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { bioBookmarkContentsQuery, bioUserInfoQuery } from "api-graphql";
import { FC, useCallback, useState } from "react";
import { Bookmark, UserInfo } from "ui";
import { BookmarkData } from "ui/BookmarkList/bookmark_data";
import { BiolinkModal } from "./modal";

interface BiolinkPageParams {
  userName: string;
}

type BiolinkProps = BiolinkPageParams;

interface BiolinkBookmarkListProps extends BiolinkProps {
  onViewDetail: Parameters<typeof Bookmark>[0]["onViewDetail"];
}

const BiolinkUserInfo: FC<BiolinkProps> = ({ userName }) => {
  const { data } = useSuspenseQuery(bioUserInfoQuery, {
    variables: { userName },
  });

  return <UserInfo userInfo={data?.bioUserInfo} />;
};

const BiolinkBookmarkList: FC<BiolinkBookmarkListProps> = ({
  onViewDetail,
  userName,
}) => {
  const { data } = useSuspenseQuery(bioBookmarkContentsQuery, {
    variables: { userName },
  });

  return (
    <>
      {data?.bioBookmarkContents?.map((bookmark) => (
        <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
          onViewDetail={onViewDetail}
        />
      ))}
    </>
  );
};

export default function BiolinkPage({ params }: { params: BiolinkPageParams }) {
  const [bookmark, setBookmark] = useState<BookmarkData>(null);
  const onModalDismiss = useCallback(() => setBookmark(null), [setBookmark]);

  return (
    <>
      <BiolinkUserInfo {...params} />
      <BiolinkBookmarkList {...params} onViewDetail={setBookmark} />
      <BiolinkModal bookmark={bookmark} onDismiss={onModalDismiss} />
    </>
  );
}
