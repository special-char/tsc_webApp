import React from "react";

const EmployeeCertificateSection = () => {
  const CertificateData = [
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
  ];
  return (
    <section className="py-24 bg-neutral-200">
      <div id="container" className="max-w-7xl mx-auto px-2 md:px-8">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="lg:flex-[0.8] flex-1 px-4 flex flex-col">
            <h2 className="m-0">Certificates</h2>
            <span className="w-1/5 rounded-md h-1 bg-neutral-800" />
          </div>
          <div className="px-4 flex-[2]">
            <ul
              id="list "
              className="flex flex-col p-0 m-0 items-start justify-start"
            >
              {CertificateData.map((item) => {
                return (
                  <li className="flex gap-4 items-center ">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
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
