import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getEssayMdxComponents } from "@/components/mdx/essay-mdx-registry";

type Props = { source: string };

export async function EssayBody({ source }: Props) {
  return (
    <MDXRemote
      source={source}
      components={getEssayMdxComponents()}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
