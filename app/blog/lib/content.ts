import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  categories?: string[];
  tags?: string[];
  layout?: string;
  type: 'entry' | 'news';
  author?: string;
  image?: string;
  featured?: boolean;
}

const POSTS_DIRECTORY = path.join(process.cwd(), 'content/blog/posts');
const NEWS_DIRECTORY = path.join(process.cwd(), 'content/blog/news');

function readMarkdownFile(filePath: string, type: BlogPost['type']): BlogPost {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const slug = path.basename(filePath, path.extname(filePath));

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    description: data.description || '',
    content,
    categories: data.categories || [],
    tags: data.tags || [],
    layout: data.layout || 'post',
    type,
    author: data.author || 'Wingle Team',
    image: data.image || '',
    featured: data.featured || false,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => readMarkdownFile(path.join(POSTS_DIRECTORY, fileName), 'entry'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getAllNews(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(NEWS_DIRECTORY);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => readMarkdownFile(path.join(NEWS_DIRECTORY, fileName), 'news'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return readMarkdownFile(path.join(POSTS_DIRECTORY, `${slug}.md`), 'entry');
  } catch {
    return null;
  }
}

export async function getNewsBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return readMarkdownFile(path.join(NEWS_DIRECTORY, `${slug}.md`), 'news');
  } catch {
    return null;
  }
}
