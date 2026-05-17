import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";

type Props = {
  children: ReactNode;
};

export function ArticleShell({ children }: Props) {
  return (
    <article className="qa-article-shell w-full">
      <Container>{children}</Container>
    </article>
  );
}
