export interface BlogContent {
  title: string
  date: string
  description: Array<string>
  body: string
}

export interface BlogItems {
  items: Array<BlogContent>
}

export interface BlogPostsType {
  blogPosts: Array<any>
}
