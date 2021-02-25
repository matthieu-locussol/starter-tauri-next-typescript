import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

type Post = {
   id: number;
   title: string;
   userId: number;
   body: string;
};

const Posts = (): JSX.Element => {
   const [data, setData] = useState<Post[]>([]);

   useEffect(() => {
      (async () => {
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
         setData(response.data);
      })();
   }, []);

   if (data.length === 0) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <h1>Blog posts</h1>
         <Link href="/">Go back to homepage</Link>
         {data.map((post: Post) => (
            <div>
               <h5>
                  {post.id} - {post.title} par l'user {post.userId}
               </h5>
               <p>{post.body}</p>
            </div>
         ))}
      </div>
   );
};

export default Posts;
