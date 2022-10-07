import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import TextField from "../../components/Inputs/TextField";
import { UserContext } from "../../context/UserContext";
import { Actions } from "../../store/actions/User.actions";

const StepAddress = () => {
  const { state, dispatch } = useContext(UserContext);
  const { data: values } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: Actions.HANDLE_CHANGE_ADDRESS, payload: { name, value } });
  };

  return (
    <main className="w-full p-6 border border-white/20 rounded-lg md:p-12 ">
      <form className="flex flex-col gap-4">
        <TextField
          label="Street"
          name="street"
          type="text"
          value={values.address.street}
          onChange={handleChange}
        />
        <TextField
          label="Number"
          name="number"
          type="text"
          value={values.address.number}
          onChange={handleChange}
        />
        <TextField
          label="Zipcode"
          name="zipcode"
          type="text"
          value={values.address.zipcode}
          onChange={handleChange}
        />
        <TextField
          label="Neighborhood"
          name="neighborhood"
          type="text"
          value={values.address.neighborhood}
          onChange={handleChange}
        />
        <TextField
          label="Complement"
          name="complement"
          type="text"
          value={values.address.complement}
          onChange={handleChange}
        />
        <TextField
          label="State"
          name="state"
          type="text"
          value={values.address.state}
          onChange={handleChange}
        />
        <TextField
          label="City"
          name="city"
          type="text"
          value={values.address.city}
          onChange={handleChange}
        />
        <TextField
          label="Country"
          name="country"
          type="text"
          value={values.address.country}
          onChange={handleChange}
        />

        <div className="grid grid-cols-2 gap-4">
          <Link to={"/new-user/basic-info"}>
            <Button className="w-full">Back</Button>
          </Link>
          <Link to={"/new-user/profile-config"}>
            <Button className="w-full">Next</Button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default StepAddress;
