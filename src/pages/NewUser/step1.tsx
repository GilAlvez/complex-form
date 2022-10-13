import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList, Select } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TextArea from "../../components/Inputs/TextArea";
import TextField from "../../components/Inputs/TextField";
import { UserContext } from "../../context/UserContext";
import { Actions } from "../../store/actions/User.actions";
import { IntlPhone, intlPhoneMask } from "../../utils/intlPhoneMask";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const StepBasicInfo = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { state, dispatch } = useContext(UserContext);
  const [selectedCountry, setSelectedCountry] = useState<IntlPhone>();
  const { data: values } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch({ type: Actions.HANDLE_CHANGE, payload: { name, value } });
  };

  const countryChange = (country: IntlPhone) => {
    dispatch({ type: Actions.HANDLE_CHANGE, payload: { name: "phone", value: "" } });
    dispatch({
      type: Actions.HANDLE_CHANGE,
      payload: { name: "countryCode", value: country.countryCode },
    });
    setSelectedCountry(country);
  };

  return (
    <main className="flex flex-col gap-4 w-full p-6 border border-white/20 rounded-lg md:p-12 ">
      <form className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <TextField
          label="First name"
          name="first_name"
          type="text"
          className="md:col-span-4"
          value={values.first_name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          className="md:col-span-8"
          value={values.last_name}
          onChange={handleChange}
          required
        />
        <datalist id="genre_options">
          <option value="Male" />
          <option value="Female" />
        </datalist>
        <TextField
          label="Genre"
          name="genre"
          list="genre_options"
          type="text"
          className="md:col-span-6 xl:col-span-3"
          value={values.genre}
          onChange={handleChange}
          required
        />
        <TextField
          label="Birthday"
          name="birthday"
          type="date"
          className="md:col-span-6 xl:col-span-3"
          value={values.birthday}
          onChange={handleChange}
          required
        />

        <TextField
          leftElement={
            <Menu>
              <MenuButton as={Button} borderRightRadius={0} width="max-content">
                +{selectedCountry?.countryCode}
              </MenuButton>
              <MenuList
                children={intlPhoneMask.map((country) => (
                  <MenuItem
                    key={country.isoCode}
                    onClick={() => {
                      countryChange(country);
                      ref?.current?.focus();
                    }}
                    className="flex justify-between gap-3"
                  >
                    <div>
                      <span className={`fi fi-${country.isoCode} mr-3`} />
                      <span>{country.name}</span>
                    </div>
                    <div>+{country.countryCode}</div>
                  </MenuItem>
                ))}
              />
            </Menu>
          }
          mask={selectedCountry?.mask}
          label="Phone"
          name="phone"
          inputRef={ref}
          type="text"
          value={values.phone}
          onChange={handleChange}
          isDisabled={!selectedCountry}
          className="md:col-span-12 xl:col-span-6"
          required
          borderLeftRadius={0}
        />

        <TextArea
          label="Description"
          name="description"
          placeholder="About me..."
          className="md:col-span-12"
          value={values.description}
          onChange={handleChange}
        />
        <TextField
          label="Site"
          name="website"
          type="url"
          className="md:col-span-12"
          leftAddon="https://"
          value={values.website}
          onChange={handleChange}
        />
        <TextArea
          label="Tags"
          name="tags"
          className="md:col-span-12"
          value={values.tags}
          onChange={handleChange}
        />
      </form>
      <div className="grid grid-cols-2 gap-4">
        <Link to={"/"}>
          <Button className="w-full">Back</Button>
        </Link>
        <Link to={"/new-user/address"}>
          <Button className="w-full">Next</Button>
        </Link>
      </div>
    </main>
  );
};

export default StepBasicInfo;
