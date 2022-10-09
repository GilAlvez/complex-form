import { Button, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddressCard from "../../components/Cards/Address";
import SearchField from "../../components/Inputs/SearchField";
import TextField from "../../components/Inputs/TextField";
import { UserContext } from "../../context/UserContext";
import { addressApi } from "../../services/axios";
import { Actions } from "../../store/actions/User.actions";
import { PositionStackResults } from "../../types/PositionStack";

const StepAddress = () => {
  const toast = useToast();

  const { state, dispatch } = useContext(UserContext);
  const { data: values } = state;
  const [adresses, setAdresses] = useState<any[]>();
  const [selectedAddress, setSelectedAddress] = useState<any>();

  // Adresses request on search event
  const getAdresses = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget.search_address;
    const params = { query: value };
    value &&
      addressApi("/forward", { params })
        .then((res) => {
          setAdresses(res.data.data);
        })
        .catch((err) =>
          toast({
            title: err.response.data?.error.message,
            status: "error",
            variant: "subtle",
            position: "top",
            duration: 3000,
          })
        );
  };

  // Update address on card click
  useEffect(() => {
    const handleChangeAddress = (address: PositionStackResults) => {
      const { label, country, county: city, postal_code, region: state, street } = address;
      const payload = { label, country, city, postal_code, state, street };
      dispatch({ type: Actions.HANDLE_CHANGE_ADDRESS, payload });
    };
    selectedAddress && handleChangeAddress(selectedAddress);
  }, [selectedAddress]);

  // Resolves whats address fields isnt updated
  // const addressValues = Object.entries(values.address);
  // const onlyNullValues = addressValues?.filter((value) => value[1] === null);

  return (
    <main className="w-full p-6 border border-white/20 rounded-lg md:p-12 ">
      <div className="flex flex-col gap-4">
        <form onSubmit={getAdresses}>
          <SearchField
            label="Search your address here"
            id="search_address"
            name="search_address"
            placeholder="postal code, city name, region name..."
            buttonName="Search Address"
            error={adresses?.length === 0 ? "No results found" : ""}
          />
        </form>

        {adresses?.map((address) => (
          <AddressCard
            key={address.latitude + address.longitude}
            onClick={() => setSelectedAddress(address)}
          >
            {address.label}
          </AddressCard>
        ))}

        {selectedAddress && (
          <form className="grid grid-cols-2 gap-4">
            <TextField label="Street" name="street" type="text" value={values.address.street} />
            <TextField label="Country" name="country" type="text" value={values.address.country} />
            <TextField label="City" name="city" type="text" value={values.address.city} />
            <TextField
              label="Postal Code"
              name="postal_code"
              type="text"
              value={values.address?.postal_code}
            />
            <TextField label="State" name="state" type="text" value={values.address.state} />
          </form>
        )}

        <div className="grid grid-cols-2 gap-4">
          <Link to={"/new-user/basic-info"}>
            <Button className="w-full">Back</Button>
          </Link>
          <Link to={"/new-user/profile-config"}>
            <Button className="w-full">Next</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default StepAddress;
