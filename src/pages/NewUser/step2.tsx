import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddressCard from "../../components/Cards/Address";
import SearchField from "../../components/Inputs/SearchField";
import TextField from "../../components/Inputs/TextField";
import { AddressContext } from "../../context/AddressContext";
import { UserContext } from "../../context/UserContext";
import { stepTwoSchema } from "../../helpers/validations/createUser";
import useYupValidation from "../../hooks/useYupValidation";
import { Actions } from "../../store/actions/User.actions";
import { PositionStackResults } from "../../types/PositionStack";
import { StepTwoValidation } from "../../types/UserValidation";

const StepAddress = () => {
  const navigate = useNavigate();

  const { adresses, getAdresses } = useContext(AddressContext);
  const { state, dispatch } = useContext(UserContext);
  const { data: values } = state;

  const [errors, setErrors] = useState<StepTwoValidation>();

  const selectAddress = (address: PositionStackResults) => {
    const { label, country, county: city, postal_code, region: state, street } = address;
    const payload = { label, country, city, postal_code, state, street };

    dispatch({ type: Actions.HANDLE_SELECT_ADDRESS, payload });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: Actions.HANDLE_CHANGE_ADDRESS, payload: { name, value } });
  };

  const handleNextStep = async () => {
    const { label, city, country, postal_code, state, street } = values.address;
    const stepTwo = { label, city, country, postal_code, state, street };
    useYupValidation({ data: stepTwo, schema: stepTwoSchema }).then((res: any) => {
      const { errors } = res;
      if (errors) {
        setErrors(errors);
        return;
      }
      dispatch({ type: Actions.HANDLE_NEXT_STEP, payload: { step: "2" } });
      navigate("/new-user/plan");
    });
  };

  return (
    <main className="w-full p-6 border border-white/20 rounded-lg md:p-12 ">
      <div className="flex flex-col gap-4">
        <form onSubmit={getAdresses}>
          <SearchField
            label="Search your address here"
            id="search_address"
            name="search_address"
            placeholder="street, postal code, region name..."
            buttonName="Search Address"
            error={adresses?.length === 0 ? "No results found" : ""}
          />
        </form>

        {adresses?.map((address) => (
          <AddressCard
            key={address.latitude + address.longitude}
            onClick={() => selectAddress(address)}
            onFocus={() => selectAddress(address)}
            selected={address?.label === values.address.label}
          >
            {address.label}
          </AddressCard>
        ))}

        <form className="grid grid-cols-2 gap-4">
          <TextField
            label="Street"
            name="street"
            type="text"
            className="col-span-2"
            value={values.address.street ?? ""}
            onChange={handleChange}
            error={errors?.street}
          />
          <TextField
            label="City"
            name="city"
            type="text"
            value={values.address.city ?? ""}
            onChange={handleChange}
            error={errors?.city}
          />
          <TextField
            label="Postal Code"
            name="postal_code"
            type="text"
            value={values.address.postal_code ?? ""}
            onChange={handleChange}
            error={errors?.postal_code}
          />
          <TextField
            label="State"
            name="state"
            type="text"
            value={values.address.state ?? ""}
            onChange={handleChange}
            error={errors?.state}
          />
          <TextField
            label="Country"
            name="country"
            type="text"
            value={values.address.country ?? ""}
            onChange={handleChange}
            error={errors?.country}
          />
        </form>

        <div className="grid grid-cols-2 gap-4">
          <Link to={"/new-user/basic-info"}>
            <Button className="w-full">Back</Button>
          </Link>
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      </div>
    </main>
  );
};

export default StepAddress;
