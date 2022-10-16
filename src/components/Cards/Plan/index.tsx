import { Radio, RadioProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PlanCardProps extends RadioProps {
  plan: {
    name: string;
    price: string;
    benefits: { limit: string; donwload: boolean; upload: boolean };
  };
  children?: ReactNode;
  selected: boolean;
}
const PlanCard = (props: PlanCardProps) => {
  const { plan, children, selected, ...rest } = props;
  return (
    <label
      className={`flex flex-col select-none border-slate-700/30 hover:bg-slate-700/50 outline-none p-4 border rounded-lg transition-all cursor-pointer ${
        selected ? "bg-slate-700/80 hover:bg-slate-700/80" : "bg-slate-700/30"
      }`}
    >
      <Radio alignSelf={"flex-end"} {...rest} />
      <div className="p-4 rounded-t-lg bg-slate-400/20 -mx-4 -mt-8">
        <h2>{plan.name}</h2>
        <p>{plan.price}</p>
      </div>
      <ul className="py-4 list-disc list-inside">
        <li>Limit user: {plan.benefits.limit}</li>
        {plan.benefits.donwload && <li>Download profile</li>}
        {plan.benefits.upload && <li>Upload profile</li>}
      </ul>

      {children}
    </label>
  );
};

export default PlanCard;
