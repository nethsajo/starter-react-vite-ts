import { type Post } from './types';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

export type GetPostsDataResponse = Post[];

export async function getPostsData(): Promise<GetPostsDataResponse> {
  const response = await fetch(postsUrl);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return await response.json();
}
