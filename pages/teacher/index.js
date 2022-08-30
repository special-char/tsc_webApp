import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    title: "React",
  },
  {
    id: 2,
    title: "Flutter",
  },
  {
    id: 3,
    title: "Node js",
  },
  {
    id: 4,
    title: "Next js",
  },
];

const Course = () => {
  return (
    <>
      <h1>All Teacher Page</h1>
      
      {data.map((val) => (
          <Link href={"/teacher/" + val.id} key={val.id}>
            <button className="btn btn--primary">{val.title}</button>
          </Link>
      ))}
    </>
  );
};

export default Course;

// import Link from "next/link";

// export const getStaticProps = async () => {
//   const data = [
//     {
//       id: 1,
//       title: "Coures 1",
//     },
//     {
//       id: 2,
//       title: "Coures 2",
//     },
//     {
//       id: 3,
//       title: "Coures 3",
//     },
//   ];

//   return {
//     props: { courses: data },
//   };
// };

// const Course = ({ courses }) => {
//   return (
//     <div>
//       <h1>All Details of Courses</h1>
//       {courses.map((item) => (
//         <Link href={"/course/" + item.id} key={item.id}>
//           <a>
//             <h3>{item.title}</h3>
//           </a>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Course;
