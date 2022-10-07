import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { HTMLInputTypeAttribute, useEffect, useState } from "react";

interface TextFieldProps extends InputProps {
  isInvalid?: boolean;
  error?: string;
  label?: string;
  showPass?: boolean;
  type?: HTMLInputTypeAttribute;
}

const TextField = (props: TextFieldProps) => {
  const { isInvalid, error, label, showPass, type, ...rest } = props;

  const [show, setShow] = useState(false);
  const [dynamicType, setDynamicType] = useState(type);

  useEffect(() => {
    show ? setDynamicType("text") : setDynamicType("password");
  }, [show]);

  const handleClick = () => {
    setShow((state) => !state);
  };

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input type={dynamicType} {...rest} />
        {showPass && type === "password" && (
          <InputRightElement width="4rem">
            <Button size="xs" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
