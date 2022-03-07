import { Link, useLoaderData } from 'remix';
import { getPosts } from '~/post';
import type { Post } from '~/post';

export const loader = async (): Promise<Post[]> => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any, index: number) => (
          <li key={`post-item-${index}`}>
            <Link to={post.slug}>{post.title}</Link>;
          </li>
        ))}
      </ul>
    </div>
  );
}
