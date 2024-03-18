// ccn-okta/src/lib/model.ts
// the type of the data returned from the CCN on the posts endpoint on the OnRender server

export type PostLike = {
  createdAt: string;
  updatedAt: string;
  developer: {
    id: number;
    name: string;
    email: string;
  };
};

export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author_id: number;
  tags: Array<{ id: number; tag: string }>;
  post_likes: PostLike[];
};

export type PostsResponse = {
  count: number;
  rows: Post[];
};
