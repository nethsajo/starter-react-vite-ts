import { type CreatePost, type Post } from './types';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

export type CreatePostDataArgs = CreatePost;

export type CreatePostDataResponse = Post;

export async function createPostData(args: CreatePostDataArgs): Promise<CreatePostDataResponse> {
  const response = await fetch(postsUrl, {
    method: 'POST',
    body: JSON.stringify(args),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return await response.json();
}
