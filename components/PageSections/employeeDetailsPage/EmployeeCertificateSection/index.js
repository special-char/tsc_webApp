import React from "react";

const EmployeeCertificateSection = ({ data }) => {
  console.log("certi data:", data);
  const CertificateData = [
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
  ];
  return (
    <section className="py-24 ">
      <div id="container" className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="lg:flex-[0.8] flex-1 flex flex-col">
            <h2 className="border-b-4 w-20 hover:w-40 hover:duration-200 border-secondary2">
              Certificates
            </h2>
          </div>
          <div className="flex-[2]">
            <ul
              id="list "
              className="flex flex-col p-0 m-0 items-start justify-start"
            >
              {data.map((val) => {
                return (
                  <li className="flex gap-4 items-center ">
                    <div>
                      <h3>{val.name}</h3>
                      <p>{val.issuingOrganization}</p>
                      <p>{val.issueDate}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeCertificateSection;
