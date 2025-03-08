// "use client";
// import { useParams } from "next/navigation";
// import articles from "../../../public/blogs.json";
// const BlogArticle = () => {
//   const { id } = useParams();
//   console.log(articles)
//   const article = articles.find(
//     (art) => art.title.toLowerCase().replace(/\s+/g, "-") === id
//   );
//   if (!article) {
//     return (
//       <p className="text-center text-gray-600 mt-10">
//         Articolul nu a fost găsit!
//       </p>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6">
//       <img
//         src={article.img}
//         alt={article.title}
//         className="w-full h-64 object-cover rounded-md mb-4"
//       />
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
//       <p className="text-gray-600 text-sm mb-2">
//         Scris de {article.author.name} - {article.published_date}
//       </p>
//       {article.updated_date && (
//         <p className="text-gray-500 text-xs">
//           Actualizat: {article.updated_date}
//         </p>
//       )}

//       <div className="mt-6">
//         {article.content.map((section, index) => (
//           <div key={index} className="mb-6">
//             <h2 className="text-xl font-semibold text-gray-700 mb-2">
//               {section.section}
//             </h2>
//             {section.paragraphs.map((paragraph, pIndex) => (
//               <p key={pIndex} className="text-gray-700 mb-2">
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//         <p className="text-gray-700 font-semibold">
//           {article.call_to_action.message}
//         </p>
//         <p className="text-gray-600 text-sm">
//           {article.call_to_action.subscription_form}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BlogArticle;
