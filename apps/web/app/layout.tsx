import { Inter_Tight } from "next/font/google";
import { ApolloWrapper } from "../lib/apollo-wrapper";
import { StyledComponentsWrapper } from "../lib/styled-components-wrapper";

const interTight = Inter_Tight({
  subsets: ["latin", "vietnamese"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        <ApolloWrapper>
          <StyledComponentsWrapper>{children}</StyledComponentsWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
