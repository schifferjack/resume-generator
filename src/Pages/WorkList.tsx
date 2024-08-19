export interface WorkExperienceProps {
  dateFrom: string;
  dateTo: string;
  location: string;
  listCount: number;
  workExperience: string[];
  companyName: string;
}

const WorkList = (props: WorkExperienceProps) => {
  return (
    <div>
      <p className="text-3xl text-blue-900 font-bold">{props.companyName}</p>
      <div className="flex justify-between items-center text-3xl mt-2">
        <p>
          <i className="fa-solid fa-calendar me-2"></i>
          {props.dateFrom} - {props.dateTo}
        </p>
        <p>
          <i className="fa-solid fa-location-dot me-2"></i>
          {props.location}
        </p>
      </div>
      <ul className="list-disc pl-5 leading-relaxed mb-3 text-3xl">
        {props.workExperience.slice(0, props.listCount).map((item, index) => (
          <li key={index} className="pl-2 text-indent-n1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WorkList;
