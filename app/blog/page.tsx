// "use client";
// import { useEffect, useState } from "react";

// const BlogPage = () => {
//   const [posts, setPosts] = useState<Array<any>>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const getPosts = async () => {
//     setLoading(true);
//     try {
//       const data = await fetch("/blogs.json");
//       const receivedPosts = await data.json();
//       setPosts(receivedPosts);
//       setLoading(false);
//     } catch (e: any) {
//       console.log(e);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);
//   if (posts.length > 0)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         {/* {posts.map((post) => (
//           <div key={post.title}>
//             <h1 className="text-black">{post.title}</h1>
//           </div>
//         ))} */}
//       </div>
//     );
//   else
//     return (
//       <div className="min-h-screen flex items-center justify-center text-black">
//         <div className="rounded-xl w-32 h-32 bg-color-primary animate-ping"></div>
//       </div>
//     );
// };

// export default BlogPage;

// // export async function getInitialProps() {
// //   const res = await fetch("blogs.json");
// //   const posts = res.json();
// //   return {
// //     props: posts,
// //   };
// // }
