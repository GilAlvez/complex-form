import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TagCard from "../../components/Cards/Tags";
import TextArea from "../../components/Inputs/TextArea";
import TextField from "../../components/Inputs/TextField";
import { PhoneContext } from "../../context/PhoneContext";
import { UserContext } from "../../context/UserContext";
import { stepOneValidation } from "../../helpers/validations/createUser";
import { Actions } from "../../store/actions/User.actions";
import { intlPhoneMask } from "../../utils/intlPhoneMask";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const StepBasicInfo = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { country, countryChange } = useContext(PhoneContext);
  const [errors, setErrors] = useState<any>();
  const { state, dispatch } = useContext(UserContext);
  const { data: values } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch({ type: Actions.HANDLE_CHANGE, payload: { name, value } });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget.tags;
    dispatch({ type: Actions.ADD_TAG, payload: { value } });
  };
  const removeTag = (index: number) => {
    dispatch({ type: Actions.REMOVE_TAG, payload: { index } });
  };

  const handleNextStep = () => {
    const { first_name, last_name, genre, birthday, phone, description, website, tags } = values;
    const stepOne = { first_name, last_name, genre, birthday, phone, description, website, tags };
    stepOneValidation
      .validate(stepOne, { abortEarly: false })
      .then((res) => console.log(res))
      .catch((err) => {
        const { inner } = err;
        let errorsMessage: any = {};
        for (let index = 0; index < inner.length; index++) {
          if (inner[index].path in errorsMessage) {
            errorsMessage = {
              ...errorsMessage,
              [inner[index].path]: [
                ...errorsMessage[inner[index].path].concat(inner[index].errors),
              ],
            };
          } else {
            errorsMessage = { ...errorsMessage, [inner[index].path]: inner[index].errors };
          }
        }
        setErrors(errorsMessage);
      });
  };

  return (
    <main className="flex flex-col gap-4 w-full p-6 border border-white/20 rounded-lg md:p-12 ">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <TextField
          label="First name"
          name="first_name"
          type="text"
          className="md:col-span-4"
          value={values.first_name}
          onChange={handleChange}
          error={errors?.first_name}
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          className="md:col-span-8"
          value={values.last_name}
          onChange={handleChange}
          error={errors?.last_name}
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
          error={errors?.genre}
        />
        <TextField
          label="Birthday"
          name="birthday"
          type="date"
          className="md:col-span-6 xl:col-span-3"
          value={values.birthday}
          onChange={handleChange}
          error={errors?.birthday}
        />

        <TextField
          leftElement={
            <Menu>
              <MenuButton as={Button} borderRightRadius={0} width="max-content">
                +{values?.countryCode}
              </MenuButton>
              <MenuList
                children={intlPhoneMask.map((country) => (
                  <MenuItem
                    key={country.isoCode}
                    onClick={() => {
                      countryChange(country);
                      setTimeout(() => {
                        ref?.current?.focus();
                      }, 50);
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
          mask={country?.mask}
          label="Phone"
          name="phone"
          inputRef={ref}
          type="text"
          placeholder={country?.mask}
          value={values.phone}
          onChange={handleChange}
          isDisabled={!values.countryCode}
          className="md:col-span-12 xl:col-span-6"
          borderLeftRadius={0}
          error={errors?.phone}
        />

        <TextArea
          label="Description"
          name="description"
          placeholder="About me..."
          className="md:col-span-12"
          value={values.description}
          onChange={handleChange}
          error={errors?.description}
        />
        <TextField
          label="Site"
          name="website"
          type="url"
          className="md:col-span-12"
          leftAddon="https://"
          value={values.website}
          onChange={handleChange}
          error={errors?.website}
        />

        <div className="flex gap-4 md:col-span-12">
          <TextField label="Tags" name="tags" error={errors?.tags} />
          <Button className="self-end" type="submit" paddingX={10}>
            Add Tags
          </Button>
        </div>

        <div className="md:col-span-12">
          <div className="flex flex-wrap gap-4">
            {values.tags.map((tag) => (
              <TagCard onClick={() => removeTag(values.tags.indexOf(tag))} key={tag}>
                {tag}
              </TagCard>
            ))}
          </div>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">
        <Link to={"/"}>
          <Button className="w-full">Back</Button>
        </Link>
        {/* <Link to={"/new-user/address"}>
          <Button onClick={handleNextStep} className="w-full">
            Next
          </Button>
        </Link> */}
        <Button onClick={handleNextStep} className="w-full">
          Next
        </Button>
      </div>
    </main>
  );
};

export default StepBasicInfo;
