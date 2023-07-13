"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { bioBookmarkContentsQuery, bioUserInfoQuery } from "api-graphql";
import { FC } from "react";
import { Bookmark, UserInfo } from "ui";
import { BookmarkData } from "ui/BookmarkList/Bookmark/bookmark_data";

interface BiolinkPageParams {
  userName: string;
}

type BiolinkProps = BiolinkPageParams;

const viewDetailCallback = (bookmark: BookmarkData) => {};

const BiolinkUserInfo: FC<BiolinkProps> = ({ userName }) => {
  const { data } = useSuspenseQuery(bioUserInfoQuery, {
    variables: { userName },
  });

  return <UserInfo userInfo={data?.bioUserInfo} />;
};

const BiolinkBookmarkList: FC<BiolinkProps> = ({ userName }) => {
  const { data } = useSuspenseQuery(bioBookmarkContentsQuery, {
    variables: { userName },
  });

  return (
    <>
      {data?.bioBookmarkContents?.map((bookmark) => (
        <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
          onViewDetail={viewDetailCallback}
        />
      ))}
    </>
  );
};

export default function BiolinkPage({ params }: { params: BiolinkPageParams }) {
  return (
    <>
      <BiolinkUserInfo {...params} />
      <BiolinkBookmarkList {...params} />
    </>
  );
}
