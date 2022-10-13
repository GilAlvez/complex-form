import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  TextareaProps,
  Textarea,
} from "@chakra-ui/react";

interface TextFieldProps extends TextareaProps {
  error?: string;
  label?: string;
  className?: string;
}

const TextArea = (props: TextFieldProps) => {
  const { error, label, className, ...rest } = props;

  return (
    <FormControl isInvalid={error ? true : false} className={className}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Textarea {...rest} />
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextArea;
