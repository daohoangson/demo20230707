"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { bioBookmarkContentsQuery } from "api-graphql";
import { Bookmark, Button, Header } from "ui";
import { BookmarkData } from "ui/BookmarkList/Bookmark/bookmark_data";

const viewDetailCallback = (bookmark: BookmarkData) => {};

export default function BiolinkPage({
  params,
}: {
  params: { userName: string };
}) {
  const { data } = useSuspenseQuery(bioBookmarkContentsQuery, {
    variables: { userName: params.userName },
  });

  return (
    <>
      <Header text={params.userName} />
      {data?.bioBookmarkContents?.map((bookmark) => (
        <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
          onViewDetail={viewDetailCallback}
        />
      ))}
    </>
  );
}
