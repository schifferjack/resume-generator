export interface SkillsProps {
  category: string;
  lists: string[];
  listCount: number;
}
const Skills = (props: SkillsProps) => {
  return (
    <div className="mt-5">
      <h2 className="text-3xl font-bold">{props.category}</h2>
      <ul className="leading-normal mb-3 text-3xl page-break">
        {props.lists.slice(0, props.listCount).map((item, index) => (
          <li key={index} className="pl-2 text-indent-n1">
            <span className="font-bold">•</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
