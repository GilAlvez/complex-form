import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import TextField from "../../components/Inputs/TextField";
import { UserContext } from "../../context/UserContext";
import { Actions } from "../../store/actions/User.actions";

const StepBasicInfo = () => {
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
          label="First name"
          name="first_name"
          type="text"
          value={values.first_name}
          onChange={handleChange}
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          value={values.last_name}
          onChange={handleChange}
        />
        <TextField
          label="Genre"
          name="genre"
          type="text"
          value={values.genre}
          onChange={handleChange}
        />
        <TextField
          label="Register Number"
          name="register_number"
          type="text"
          value={values.register_number}
          onChange={handleChange}
        />
        <TextField
          label="Mother"
          name="mother_name"
          type="text"
          value={values.mother_name}
          onChange={handleChange}
        />
        <TextField
          label="Birthday"
          name="birthday"
          type="text"
          value={values.birthday}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          name="description"
          type="text"
          value={values.description}
          onChange={handleChange}
        />
        <TextField
          label="Site"
          name="website"
          type="text"
          value={values.website}
          onChange={handleChange}
        />
        <TextField
          label="Twitter"
          name="twitter"
          type="text"
          value={values.twitter}
          onChange={handleChange}
        />
        <TextField
          label="Occupation"
          name="occupation"
          type="text"
          value={values.occupation}
          onChange={handleChange}
        />
        <TextField
          label="Company"
          name="company"
          type="text"
          value={values.company}
          onChange={handleChange}
        />
        <TextField
          label="Phone"
          name="phone"
          type="text"
          value={values.phone}
          onChange={handleChange}
        />
        <TextField
          label="Tags"
          name="tags"
          type="text"
          value={values.tags}
          onChange={handleChange}
        />

        <div className="grid grid-cols-2 gap-4">
          <Link to={"/"}>
            <Button className="w-full">Back</Button>
          </Link>
          <Link to={"/new-user/address"}>
            <Button className="w-full">Next</Button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default StepBasicInfo;
