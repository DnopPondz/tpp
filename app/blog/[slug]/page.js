import { notFound } from "next/navigation";
import BlogArticleView from "./BlogArticleView";
import { blogPosts } from "../blog";

const getBasePost = (slug) => blogPosts.find((post) => post.slug === slug);

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBasePost(params.slug);

  if (!post) {
    return {
      title: "ไม่พบบทความ | Article not found | ThaiPaipan Textile Printing",
    };
  }

  return {
    title: `${post.translations.th.title} / ${post.translations.en.title} | ThaiPaipan Textile Printing`,
    description: `${post.translations.th.excerpt} | ${post.translations.en.excerpt}`,
  };
}

export default function BlogArticlePage({ params }) {
  const post = getBasePost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogArticleView slug={params.slug} />;
}
