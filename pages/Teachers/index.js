// import Link from "next/link";

// export const getStaticProps = async () => {
//   const res = await fetch("http://jsonplaceholder.typicode.come/users");
//   const data = await res.json();

//   return {
//     props: { Teachers: data },
//   };
// };

// const Teachers = ({ Teachers }) => {
//   return (
//     <div>
//       <h1>Teachers</h1>
//       {Teachers.map((Teacher) => (
//         <Link key={Teacher.id}>
//           <a className={style.single}>
//             <h3>{Teacher.name}</h3>
//           </a>
//         </Link>
//       ))}
//     </div>
//   );
// };
