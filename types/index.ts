export interface BlogContent {
  title: string;
  date: string;
  category: string[];
  content: string;
  id: number;
}

export interface BlogItems {
  items: Array<BlogContent>;
}

export interface BlogPostsType {
  blogPosts: Array<any>;
}
