import { Button, RadioGroup } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PlanCard from "../../components/Cards/Plan";
import { UserContext } from "../../context/UserContext";
import { Actions } from "../../store/actions/User.actions";
import { plans } from "../../utils/plans";

const StepPlans = () => {
  const { state, dispatch } = useContext(UserContext);
  const { data: values } = state;

  const handleChange = (value: string) => {
    dispatch({ type: Actions.HANDLE_CHANGE, payload: { name: "plan_id", value } });
  };

  return (
    <main className="w-full p-6 border border-white/20 rounded-lg md:p-12 ">
      <form className="flex flex-col gap-4">
        <RadioGroup
          className="grid grid-cols-3 gap-4"
          value={values.plan_id}
          onChange={handleChange}
        >
          {plans.map((plan) => (
            <PlanCard plan={plan} value={plan.id} selected={values.plan_id === plan.id} />
          ))}
        </RadioGroup>

        <div className="grid grid-cols-2 gap-4">
          <Link to={"/new-user/address"}>
            <Button className="w-full">Back</Button>
          </Link>
          <Link to={"/new-user/user-info"}>
            <Button className="w-full">Next</Button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default StepPlans;
