import { cn } from "@/lib/utils";

type notificationProp = {
    name:string,
    icon: React.FC<{ className?: string }>
}
const Notifications = ({className}:{className?:string}) => {
  const envelopeSVG: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <svg
        className={className}
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1Z"
          stroke="#111827"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 3L10 9L19 3"
          stroke="#111827"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const bellSVG: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <svg
        className={className}
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3C12.1484 3.54303 13.1274 4.38833 13.8321 5.4453C14.5367 6.50227 14.9404 7.73107 15 9V12C15.0753 12.6217 15.2954 13.2171 15.6428 13.7381C15.9902 14.2592 16.4551 14.6914 17 15H1C1.54494 14.6914 2.00981 14.2592 2.35719 13.7381C2.70457 13.2171 2.92474 12.6217 3 12V9C3.05956 7.73107 3.4633 6.50227 4.16795 5.4453C4.8726 4.38833 5.85159 3.54303 7 3"
          stroke="#111827"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 15V16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19C9.79565 19 10.5587 18.6839 11.1213 18.1213C11.6839 17.5587 12 16.7956 12 16V15"
          stroke="#111827"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const notificationIcons:  notificationProp[] = [
    {name: "envelope", icon: envelopeSVG },
    {name: "bell", icon: bellSVG }
  ] 

  return <ul className={cn(className, "")}>
    {notificationIcons.map((item, index)=>{
        return (
            <li key={index} className=" cursor-pointer hover:rounded-full hover:opacity-15 relative w-fit">
                <item.icon className="w-5 h-5"/>
                <div className="absolute w-2 h-2 bg-red-600 rounded-full -top-1 right-0"></div>
            </li>
        )
    })}
  </ul>;
};

export default Notifications;
