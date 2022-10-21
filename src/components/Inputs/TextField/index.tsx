import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps,
  Button,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { HTMLInputTypeAttribute, ReactNode, useState } from "react";

interface TextFieldProps extends InputProps {
  mask?: string | Array<string | RegExp>;
  error?: string[];
  label?: string;
  showPass?: boolean;
  type?: HTMLInputTypeAttribute;
  className?: string;
  leftAddon?: string;
  required?: boolean;
  disabled?: boolean;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  rightElement?: ReactNode;
  leftElement?: ReactNode;
}

const TextField = (props: TextFieldProps) => {
  const {
    mask,
    error,
    label,
    showPass,
    type,
    className,
    leftAddon,
    required,
    value,
    onChange,
    onFocus,
    onBlur,
    onMouseDown,
    inputRef,
    rightElement,
    leftElement,
    ...rest
  } = props;

  const [show, setShow] = useState(false);
  const [dynamicType, setDynamicType] = useState(type);
  const handleClick = () => {
    setShow((state) => !state);
    show ? setDynamicType("password") : setDynamicType("text");
  };

  return (
    <FormControl isRequired={required} isInvalid={error ? true : false} className={className}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        {leftElement}
        {leftAddon && <InputLeftAddon backgroundColor={"gray.900"} children={leftAddon} />}

        {mask ? (
          <InputMask
            mask={mask}
            maskPlaceholder={null}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseDown={onMouseDown}
          >
            <Input type={type} ref={inputRef} {...rest} />
          </InputMask>
        ) : (
          <Input
            type={dynamicType}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseDown={onMouseDown}
            {...rest}
          />
        )}

        {showPass && type === "password" && (
          <InputRightElement width="4rem">
            <Button size="xs" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        )}
        {rightElement}
      </InputGroup>
      <FormErrorMessage>{error?.[0]}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
