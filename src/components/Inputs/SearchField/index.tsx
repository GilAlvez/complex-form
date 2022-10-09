import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  InputProps,
  FormErrorMessage,
} from "@chakra-ui/react";

interface SearchFieldProps extends InputProps {
  error?: string;
  label: string;
  buttonName: string;
}

const SearchField = (props: SearchFieldProps) => {
  const { error, label, buttonName, ...rest } = props;
  return (
    <FormControl isInvalid={error ? true : false}>
      <FormLabel>{label}</FormLabel>
      <InputGroup gap={4}>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input type="search" {...rest} />
        <Button type="submit" paddingX={10}>
          {buttonName}
        </Button>
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default SearchField;
