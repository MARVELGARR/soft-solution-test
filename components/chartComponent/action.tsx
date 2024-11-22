import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Action = ({ className }: { className?: string }) => {
  const ViewSvg: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <svg
        className={className}
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.4038 6.80875C16.7422 5.09743 15.5936 3.61747 14.1001 2.5518C12.6065 1.48612 10.8335 0.881447 9.00001 0.8125C7.16655 0.881447 5.39347 1.48612 3.89993 2.5518C2.40639 3.61747 1.25785 5.09743 0.596255 6.80875C0.551574 6.93234 0.551574 7.06766 0.596255 7.19125C1.25785 8.90257 2.40639 10.3825 3.89993 11.4482C5.39347 12.5139 7.16655 13.1186 9.00001 13.1875C10.8335 13.1186 12.6065 12.5139 14.1001 11.4482C15.5936 10.3825 16.7422 8.90257 17.4038 7.19125C17.4484 7.06766 17.4484 6.93234 17.4038 6.80875ZM9.00001 10.6562C8.27687 10.6562 7.56997 10.4418 6.9687 10.0401C6.36743 9.63831 5.8988 9.06728 5.62207 8.39919C5.34534 7.73109 5.27293 6.99594 5.41401 6.2867C5.55509 5.57746 5.90331 4.92598 6.41465 4.41464C6.92598 3.90331 7.57746 3.55508 8.28671 3.414C8.99595 3.27293 9.7311 3.34533 10.3992 3.62207C11.0673 3.8988 11.6383 4.36743 12.0401 4.9687C12.4418 5.56996 12.6563 6.27686 12.6563 7C12.6548 7.96924 12.2691 8.89836 11.5837 9.58372C10.8984 10.2691 9.96925 10.6548 9.00001 10.6562Z"
          fill="#8F95B2"
        />
      </svg>
    );
  };
  const ExportSvg: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <svg
        className={className}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.25 12H9.75V5.25H12L9 1.5L6 5.25H8.25V12Z" fill="#8F95B2" />
        <path
          d="M3.75 16.5H14.25C15.0773 16.5 15.75 15.8273 15.75 15V8.25C15.75 7.42275 15.0773 6.75 14.25 6.75H11.25V8.25H14.25V15H3.75V8.25H6.75V6.75H3.75C2.92275 6.75 2.25 7.42275 2.25 8.25V15C2.25 15.8273 2.92275 16.5 3.75 16.5Z"
          fill="#8F95B2"
        />
      </svg>
    );
  };
  const TrashSvg: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <svg
        className={className}
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.25 4.5H14.75"
          stroke="#FF754C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 4.5V3C5 2.60218 5.15804 2.22064 5.43934 1.93934C5.72065 1.65804 6.10218 1.5 6.5 1.5H9.5C9.89783 1.5 10.2794 1.65804 10.5607 1.93934C10.842 2.22064 11 2.60218 11 3V4.5M13.25 4.5V15C13.25 15.3978 13.092 15.7794 12.8107 16.0607C12.5294 16.342 12.1478 16.5 11.75 16.5H4.25C3.85218 16.5 3.47064 16.342 3.18934 16.0607C2.90804 15.7794 2.75 15.3978 2.75 15V4.5H13.25Z"
          stroke="#FF754C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 8.25V12.75"
          stroke="#FF754C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 8.25V12.75"
          stroke="#FF754C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const ThreeDots: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <svg
        className={className}
        width="16"
        height="3"
        viewBox="0 0 16 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="1.6803" cy="1.5" r="1.5" fill="#8F95B2" />
        <circle cx="7.6803" cy="1.5" r="1.5" fill="#8F95B2" />
        <circle cx="13.6803" cy="1.5" r="1.5" fill="#8F95B2" />
      </svg>
    );
  };

  return (
    <div className={cn(className, "")}>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center">
          <ThreeDots className="text-xl font-bold" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" space-y-3 mr-4">
          <DropdownMenuItem className=" cursor-pointer">
            <ViewSvg /> {"View"}
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <ExportSvg />
            {"Export"}
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <TrashSvg />
            {"Remove"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Action;
