import { Button, RadioGroup } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PlanCard from "../../components/Cards/Plan";
import { UserContext } from "../../context/UserContext";
import { stepThreeSchema } from "../../helpers/validations/createUser";
import useYupValidation from "../../hooks/useYupValidation";
import { Actions } from "../../store/actions/User.actions";
import { StepThreeValidation } from "../../types/UserValidation";
import { plans } from "../../utils/plans";

const StepPlans = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(UserContext);
  const { data: values } = state;

  const [errors, setErrors] = useState<StepThreeValidation>();

  const handleChange = (value: string) => {
    dispatch({ type: Actions.HANDLE_CHANGE, payload: { name: "plan_id", value } });
  };

  const handleNextStep = async () => {
    const stepThree = { plan_id: values.plan_id };
    useYupValidation({ data: stepThree, schema: stepThreeSchema }).then((res: any) => {
      const { errors } = res;
      if (errors) {
        setErrors(errors);
        return;
      }
      dispatch({ type: Actions.HANDLE_NEXT_STEP, payload: { step: "3" } });
      navigate("/new-user/user-info");
    });
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
            <PlanCard
              key={plan.id}
              plan={plan}
              value={plan.id}
              selected={values.plan_id === plan.id}
            />
          ))}
        </RadioGroup>
        <span className="text-center text-sm text-red-400">{errors?.plan_id?.[0]}</span>

        <div className="grid grid-cols-2 gap-4">
          <Link to={"/new-user/address"}>
            <Button className="w-full">Back</Button>
          </Link>
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      </form>
    </main>
  );
};

export default StepPlans;
