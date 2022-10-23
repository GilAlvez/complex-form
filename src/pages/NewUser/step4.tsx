import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageInput from "../../components/Inputs/ImageInput";
import TextField from "../../components/Inputs/TextField";
import { UserContext } from "../../context/UserContext";
import { stepFourSchema } from "../../helpers/validations/createUser";
import useYupValidation from "../../hooks/useYupValidation";
import { Actions } from "../../store/actions/User.actions";
import { StepFourValidation } from "../../types/UserValidation";

const StepUserInfo = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(UserContext);
  const { data: values, status } = state;

  const [errors, setErrors] = useState<StepFourValidation>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: Actions.HANDLE_CHANGE, payload: { name, value } });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    files && dispatch({ type: Actions.HANDLE_CHANGE_AVATAR, payload: files });
  };

  const handleNextStep = async () => {
    const { avatar, email, username, password } = values;
    const stepFour = { avatar: avatar.image, email, username, password };
    useYupValidation({ data: stepFour, schema: stepFourSchema }).then((res: any) => {
      const { errors } = res;
      if (errors) {
        setErrors(errors);
        return;
      }
      dispatch({ type: Actions.HANDLE_NEXT_STEP, payload: { step: "4" } });
      status.step1 && status.step2 && status.step3 && navigate("/");
    });
  };

  return (
    <main className="w-full p-6 border border-white/20 rounded-lg md:p-12 ">
      <form className="flex flex-col gap-4">
        <ImageInput
          label="Avatar"
          id="avatar"
          imgSrc={values.avatar.url}
          onChange={handleAvatarChange}
          error={errors?.avatar}
        />
        <TextField
          label="E-mail"
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
          error={errors?.email}
        />
        <TextField
          label="Username"
          name="username"
          type="text"
          value={values.username}
          onChange={handleChange}
          error={errors?.username}
        />
        <TextField
          label="Senha"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={errors?.password}
        />
        <div className="grid grid-cols-2 gap-4">
          <Link to={"/new-user/plan"}>
            <Button className="w-full">Back</Button>
          </Link>
          <Button onClick={handleNextStep}>Finish</Button>
        </div>
      </form>
    </main>
  );
};

export default StepUserInfo;
