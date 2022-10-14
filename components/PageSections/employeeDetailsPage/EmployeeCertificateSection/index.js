import React from "react";

const EmployeeCertificateSection = () => {
  return (
    <section className="py-24">
      <div id="container" className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <h2 className="lg:flex-[0.8] flex-1 px-4">Certificates</h2>
          <div className="px-4 flex-[2]">
            <ul
              id="list "
              className="flex flex-col p-0 m-0 items-start justify-start"
            >
              <li className="flex gap-4 items-center ">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Lorem ipsum dolor sit amet.
              </li>
              <li className="flex gap-4 items-center ">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Lorem ipsum dolor sit amet.
              </li>
              <li className="flex gap-4 items-center ">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Lorem ipsum dolor sit amet.
              </li>
              <li className="flex gap-4 items-center ">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeCertificateSection;
