import { Button, FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { InputHTMLAttributes } from "react";

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  imgSrc: string;
  label?: string;
  error?: string;
}

const ImageInput = (props: ImageInputProps) => {
  const { id, label, error, imgSrc, ...rest } = props;

  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <div
        className={`flex flex-col md:flex-row items-center justify-evenly p-4  rounded-md gap-4 ${
          error ? "border-2 border-red-400" : "border border-white/[0.16]"
        }`}
      >
        <label
          htmlFor={id}
          className="flex flex-col p-8 xl:flex-row gap-2 items-center border border-dashed rounded-md border-white/25 hover:border-white/40 transition"
        >
          <h2 className="whitespace-nowrap">Drop your image here or</h2>
          <Button size="sm">
            <label htmlFor={id} className="cursor-pointer">
              Select Image
            </label>
          </Button>
          <input id={id} type="file" accept="image/*" hidden {...rest} />
        </label>
        <figure>
          <img
            className="h-32 aspect-square rounded-full object-cover"
            loading="lazy"
            src={
              imgSrc ||
              "https://i.postimg.cc/RCf9RzWt/360-F-64676383-Ldbmhi-NM6-Ypzb3-FM4-PPu-FP9r-He7ri8-Ju.jpg"
            }
          />
        </figure>
      </div>
      <FormControl isInvalid={error ? true : false}>
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </div>
  );
};

export default ImageInput;
