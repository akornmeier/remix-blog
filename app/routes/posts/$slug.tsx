import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async ({ params }) => {
  return params.slug;
};

export default function PostSlug() {
  const slug = useLoaderData();
  return (
    <main>
      <h1>Some Post: {slug}</h1>
    </main>
  );
}
