import { ApolloWrapper } from "../lib/apollo-wrapper";
import { StyledComponentsWrapper } from "../lib/styled-components-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <StyledComponentsWrapper>{children}</StyledComponentsWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
