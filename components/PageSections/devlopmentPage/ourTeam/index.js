import Teachers from "@components/teachers";
import TSCImage from "@components/TSCImage";
import OurTeamQuery from "@queries/ourTeamQuery";
import Link from "next/link";
import React from "react";

const OurTeam = ({ data }) => {
  const employeeDetails = [
    {
      id: "1",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
    {
      id: "2",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
    {
      id: "3",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
    {
      id: "4",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
    {
      id: "5",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
    {
      id: "6",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
    ,
    {
      id: "7",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
    {
      id: "8",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
    ,
    {
      id: "9",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
    {
      id: "10",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
    ,
    {
      id: "11",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "employee",
      designation: "front-end developer",
    },
  ];
  return (
    <>
      <section className="pt-10 bg-neutral-200">
        <div className="max-w-7xl mx-auto px-3">
          <h1 className="capitalize text-center">we have amazing team</h1>
          <div className="avatar-container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((val) => {
              return (
                <Link href={`employee/${val.id}`} key={val.id}>
                  <div className="card drop-shadow-md">
                    <figure className="relative h-80 ">
                      <TSCImage
                        layout="fill"
                        objectFit="cover"
                        src={`http://65.20.70.84:1337${val.attributes?.avatar?.data?.attributes?.url}`}
                        alt=""
                      />
                    </figure>
                    <div className="card__body p-8 ">
                      <h3 className="card__title">
                        {val.attributes?.firstName} {data?.attributes?.lastName}
                      </h3>
                      {/* <p className="line-clamp-3 ">{data.description}</p> */}
                      <div className="card-svg  flex gap-6">
                        {/* {data.socialMedia?.map((obj) => {
                        return (
                          <Link href={`${obj.svgLink}`}>
                            <a>{obj.svg}</a>
                          </Link>
                        );
                      })} */}
                      </div>
                      <h5 className="">{val?.attributes?.experience?.Title}</h5>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch("http://65.20.70.84:1337/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: `
          {
            teams {
              data {
                id
                attributes {
                  firstName
                  lastName
                  avatar{
                    data{
                      attributes{
                        url
                      }
                    }
                  } 
                    experience{
                    Title
                  }               
                }
              }
            }
          }`,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await res.json();
    return {
      props: {
        data: json?.data?.teams?.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: error,
      },
    };
  }
}

export default OurTeam;

// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
