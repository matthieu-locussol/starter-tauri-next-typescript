import Link from 'next/link';

const Index = (): JSX.Element => (
   <div>
      <h1>Hello world!</h1>
      <p>You are using Matthieu LOCUSSOL's Tauri starter using Typescript and Next.js!</p>
      <Link href="/posts">Show blog posts</Link>
   </div>
);

export default Index;
