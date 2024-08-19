import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import WorkList from "./WorkList";
import Skills from "./Skills";
import { skills } from "../Assets/Skills";
import { workExperiences } from "../Assets/WorkExperience";

const Resume = () => {
  // Split work experience data to ensure page break after 3 items
  const firstHalfWorkExperience = workExperiences.slice(0, 3);
  const secondHalfWorkExperience = workExperiences.slice(3);
  const downloadResumeAsPDF = () => {
    const input1 = document.getElementById("resume1")!;
    const input2 = document.getElementById("resume2")!;

    html2canvas(input1).then((canvas1) => {
      const imgData1 = canvas1.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgProps1 = pdf.getImageProperties(imgData1);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight1 = (imgProps1.height * pdfWidth) / imgProps1.width;

      pdf.addImage(imgData1, "PNG", 0, 0, pdfWidth, pdfHeight1);

      if (input2) {
        html2canvas(input2).then((canvas2) => {
          const imgData2 = canvas2.toDataURL("image/png");
          const imgProps2 = pdf.getImageProperties(imgData2);
          const pdfHeight2 = (imgProps2.height * pdfWidth) / imgProps2.width;

          pdf.addPage();
          pdf.addImage(imgData2, "PNG", 0, 0, pdfWidth, pdfHeight2);
          pdf.save("resume.pdf");
        });
      } else {
        pdf.save("resume.pdf");
      }
    });
  };
  return (
    <>
      <div className="container mx-auto p-4" id="resume">
        {/* Page 1 */}
        <div
          id="resume1"
          className="border-red-500 border shadow-lg rounded-lg text-white flex mb-8 h-[2318px]"
        >
          {/* Info Column */}
          <div className="flex-[1] flex flex-col">
            <div className="bg-blue-950 p-12" id="contacts">
              <p className="text-5xl text-center font-bold">
                Muhammad Syariz Ashraf
              </p>
              <p className="text-4xl text-center italic my-3">
                Front-End Developer
              </p>
              <div className="mt-2">
                <div className="text-2xl leading-normal">
                  <ul>
                    <li className="flex items-center">
                      <i className="fa-solid fa-envelope me-2"></i>
                      syarizashraf@gmail.com
                    </li>
                    <li>
                      <i className="fa-solid fa-phone me-2"></i>
                      +60194751273
                    </li>
                    <li>
                      <i className="fa-brands fa-linkedin me-2"></i>
                      /in/syarizashraf/
                    </li>
                    <li className="flex items-center">
                      <i className="fa-brands fa-github me-2"></i>
                      https://github.com/schifferjack
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-slate-300 text-black p-8" id="education">
              <p className="text-4xl text-center font-bold">Education</p>
              <div className="mt-2 text-3xl leading-normal">
                <ul className="text-center">
                  <li>Bachelor(Hons) in Electronic Engineering</li>
                  <li className="font-bold">University Technology MARA</li>
                  <li>
                    <i className="fa-solid fa-calendar me-2"></i>
                    2014 - 2017
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot me-2"></i>
                    Penang, Malaysia
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 text-white p-4 bg-blue-950">
              {skills.map((skill, index) => (
                <Skills
                  category={skill.category}
                  lists={skill.lists}
                  listCount={skill.listCount}
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* Experience Column */}
          <div className="p-12 flex-[5] flex flex-col text-black">
            <p className="text-6xl font-bold">WORK EXPERIENCE</p>
            <p className="text-4xl">Mid-Senior Level Front-End Developer</p>
            <div className="mt-4">
              {firstHalfWorkExperience.map((experience, index) => (
                <WorkList
                  companyName={experience.companyName}
                  key={index}
                  dateFrom={experience.dateFrom}
                  dateTo={experience.dateTo}
                  location={experience.location}
                  listCount={experience.listCount}
                  workExperience={experience.workExperience}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Page 2 */}
        {secondHalfWorkExperience.length > 0 && (
          <div
            id="resume2"
            className="border-red-500 border shadow-lg rounded-lg text-white flex h-[2318px]"
          >
            {/* Duplicated Info Column */}
            <div className="flex-[1] flex flex-col">
              <div className="bg-blue-950 p-12" id="contacts">
                <p className="text-5xl text-center font-bold">
                  Muhammad Syariz Ashraf
                </p>
                <p className="text-4xl text-center italic my-3">
                  Front-End Developer
                </p>
                <div className="mt-2">
                  <div className="text-2xl leading-normal">
                    <ul>
                      <li className="flex items-center">
                        <i className="fa-solid fa-envelope me-2"></i>
                        syarizashraf@gmail.com
                      </li>
                      <li>
                        <i className="fa-solid fa-phone me-2"></i>
                        +60194751273
                      </li>
                      <li>
                        <i className="fa-brands fa-linkedin me-2"></i>
                        /in/syarizashraf/
                      </li>
                      <li className="flex items-center">
                        <i className="fa-brands fa-github me-2"></i>
                        https://github.com/schifferjack
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-300 text-black p-8" id="education">
                <p className="text-4xl text-center font-bold">Education</p>
                <div className="mt-2 text-3xl leading-normal">
                  <ul className="text-center">
                    <li>Bachelor(Hons) in Electronic Engineering</li>
                    <li className="font-bold">University Technology MARA</li>
                    <li>
                      <i className="fa-solid fa-calendar me-2"></i>
                      2014 - 2017
                    </li>
                    <li>
                      <i className="fa-solid fa-location-dot me-2"></i>
                      Penang, Malaysia
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 text-white p-4 bg-blue-950">
                {skills.map((skill, index) => (
                  <Skills
                    category={skill.category}
                    lists={skill.lists}
                    listCount={skill.listCount}
                    key={index}
                  />
                ))}
              </div>
            </div>
            {/* Experience Column */}
            <div className="p-12 flex-[5] flex flex-col text-black">
              <p className="text-6xl font-bold">WORK EXPERIENCE</p>
              <p className="text-4xl">Mid-Senior Level Front-End Developer</p>
              <div className="mt-4">
                {secondHalfWorkExperience.map((experience, index) => (
                  <WorkList
                    companyName={experience.companyName}
                    key={index}
                    dateFrom={experience.dateFrom}
                    dateTo={experience.dateTo}
                    location={experience.location}
                    listCount={experience.listCount}
                    workExperience={experience.workExperience}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={downloadResumeAsPDF}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Download as PDF
      </button>
    </>
  );
};

export default Resume;
