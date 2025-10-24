import { notFound } from "next/navigation";
import BlogArticleView from "./BlogArticleView";
import { blogPosts, getBlogPostBySlug } from "../blog";

const normalizeSlug = (raw) => {
  if (Array.isArray(raw)) {
    return raw[0];
  }
  return raw ?? "";
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const slug = normalizeSlug(params?.slug);
  const post = getBlogPostBySlug(slug);

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
  const slug = normalizeSlug(params?.slug);
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogArticleView slug={slug} />;
}
