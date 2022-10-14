import { useToast } from "@chakra-ui/react";
import { createContext, ReactNode, useState } from "react";
import { addressApi } from "../services/axios";

export const AddressContext = createContext<{
  adresses: any[] | undefined;
  getAdresses: (e: React.FormEvent<HTMLFormElement>) => void;
}>({ adresses: [], getAdresses: () => {} });

interface ContextProps {
  children: ReactNode;
}

export const AddressContextProvider: React.FC<ContextProps> = ({ children }) => {
  const toast = useToast();
  const [adresses, setAdresses] = useState<any[]>();

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

  return (
    <AddressContext.Provider value={{ adresses, getAdresses }}>{children}</AddressContext.Provider>
  );
};
