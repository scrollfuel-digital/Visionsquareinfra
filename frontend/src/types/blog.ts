export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedAt: string;
  category: string;
  readTime: string;
  author: string;
  featured?: boolean;
  image?: string;
};
