export function makeFakePost(id: number, title: string) {
  return {
    id,
    title,
    content: "Bla bla bla",
    createdAt: "2024-03-19T14:05:05.976Z",
    updatedAt: "2024-03-19T14:05:06.258Z",
    author_id: 2,
    tags: [],
    post_likes: [],
  };
}
