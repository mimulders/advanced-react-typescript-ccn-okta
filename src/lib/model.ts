// ccn-okta/src/lib/model.ts
// Description: This file contains the types for the models used in the application.

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
