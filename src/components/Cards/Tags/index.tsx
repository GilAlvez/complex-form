import { CloseIcon } from "@chakra-ui/icons";
import { HTMLAttributes, ReactNode } from "react";

interface TagCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const TagCard = (props: TagCardProps) => {
  const { children, ...rest } = props;
  return (
    <div className="flex select-none ">
      <p className="bg-slate-700/30 py-2 px-3 rounded-l-lg">{children}</p>
      <div
        className="flex items-center bg-slate-700/90 hover:bg-red-600/70 py-2 px-3 rounded-r-lg cursor-pointer"
        {...rest}
      >
        <CloseIcon boxSize={2.5} />
      </div>
    </div>
  );
};

export default TagCard;
