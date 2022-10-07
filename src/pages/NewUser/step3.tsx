import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import TextField from "../../components/Inputs/TextField";
import { UserContext } from "../../context/UserContext";
import { Actions } from "../../store/actions/User.actions";

const StepProfileConfig = () => {
  const { state, dispatch } = useContext(UserContext);
  const { data: values } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: Actions.HANDLE_CHANGE, payload: { name, value } });
  };

  return (
    <main className="w-full p-6 border border-white/20 rounded-lg md:p-12 ">
      <form className="flex flex-col gap-4">
        <TextField
          label="Produto"
          name="product_id"
          type="number"
          value={values.product_id}
          onChange={handleChange}
        />

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

export default StepProfileConfig;
