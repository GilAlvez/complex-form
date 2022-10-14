import { useToast } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useState } from "react";
import { addressApi } from "../services/axios";
import { Actions } from "../store/actions/User.actions";
import { IntlPhone } from "../utils/intlPhoneMask";
import { UserContext } from "./UserContext";

export const PhoneContext = createContext<{
  country?: IntlPhone;
  countryChange: (country: IntlPhone) => void;
}>({ country: { countryCode: "0", isoCode: "0", mask: "0", name: "0" }, countryChange: () => {} });

interface ContextProps {
  children: ReactNode;
}

export const PhoneContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [country, setCountry] = useState<IntlPhone>();
  const { dispatch } = useContext(UserContext);

  const countryChange = (country: IntlPhone) => {
    dispatch({ type: Actions.HANDLE_CHANGE, payload: { name: "phone", value: "" } });
    dispatch({
      type: Actions.HANDLE_CHANGE,
      payload: { name: "countryCode", value: country.countryCode },
    });
    setCountry(country);
  };

  return (
    <PhoneContext.Provider value={{ country, countryChange }}>{children}</PhoneContext.Provider>
  );
};
