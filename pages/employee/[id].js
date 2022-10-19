import Layout from "@components/Layouts";
import EmployeeDetails from "@components/PageSections/employeeDetailsPage";
import { headers } from "next.config";
import React, { PureComponent } from "react";

class Employee extends PureComponent {
  // state = {
  //   teams: null,
  // };

  // async componentDidMount() {json?.data?.teams?.data
  //   try {
  //     const res = await fetch("http://65.20.70.84:1337/graphql", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         query: `
  //         {
  //           teams {
  //             data {
  //               attributes {
  //                 firstName
  //                 lastName
  //                 technology {
  //                   technology {
  //                     data {
  //                       attributes {
  //                         name
  //                       }
  //                     }
  //                   }
  //                 }
  //                 avatar {
  //                   data {
  //                     attributes {
  //                       url
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }`,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     });
  //     const json = await res.json();
  //     this.setState({ teams:  });
  //   } catch (error) {}
  // }

  render() {
    const { teams } = this.props;
    return (
      <div>
        {teams?.map(({ attributes }) => (
          <div>
            <img
              src={`http://65.20.70.84:1337${attributes.avatar.data.attributes.url}`}
              alt="hello"
              height={100}
              width={100}
            />
            <h2>{`${attributes.firstName} ${attributes.lastName}`}</h2>
          </div>
        ))}
      </div>
    );
  }
}

Employee.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
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
                attributes {
                  firstName
                  lastName
                  technology {
                    technology {
                      data {
                        attributes {
                          name
                        }
                      }
                    }
                  }
                  avatar {
                    data {
                      attributes {
                        url
                      }
                    }
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
        teams: json?.data?.teams?.data
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

export default Employee;
