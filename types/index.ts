export interface BlogContent {
  title: string;
  date: string;
  category: string[];
  content: string;
  introduction: string;
  id: number;
}

export interface BlogItems {
  items: Array<BlogContent>;
}

export interface BlogPostsType {
  blogPosts: Array<any>;
}

export interface HeaderTag {
  title: string;
}
