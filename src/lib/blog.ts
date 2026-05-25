import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  coverColor: string;
  content: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  pedagogy: 'accent-purple',
  product: 'accent-blue',
  stories: 'accent-coral',
  leadership: 'accent-teal',
  resources: 'accent-green',
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    const { data, content } = matter(raw);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title ?? '',
      excerpt: data.excerpt ?? '',
      category: data.category ?? 'pedagogy',
      author: data.author ?? 'PlayPilot Team',
      date: data.date ?? '',
      readTime: stats.text,
      featured: data.featured ?? false,
      coverColor: CATEGORY_COLORS[data.category] ?? 'accent-blue',
      content,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    category: data.category ?? 'pedagogy',
    author: data.author ?? 'PlayPilot Team',
    date: data.date ?? '',
    readTime: stats.text,
    featured: data.featured ?? false,
    coverColor: CATEGORY_COLORS[data.category] ?? 'accent-blue',
    content,
  };
}

export function getCategories(): string[] {
  return Object.keys(CATEGORY_COLORS);
}
