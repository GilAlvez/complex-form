import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ImageInput from "../../components/Inputs/ImageInput";
import TextField from "../../components/Inputs/TextField";
import { UserContext } from "../../context/UserContext";
import { Actions } from "../../store/actions/User.actions";

const StepUserInfo = () => {
  const { state, dispatch } = useContext(UserContext);
  const { data: values } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: Actions.HANDLE_CHANGE, payload: { name, value } });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    files && dispatch({ type: Actions.HANDLE_CHANGE_AVATAR, payload: files });
  };

  return (
    <main className="w-full p-6 border border-white/20 rounded-lg md:p-12 ">
      <form className="flex flex-col gap-4">
        <TextField
          label="E-mail"
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
        />
        <ImageInput
          label="Avatar"
          id="avatar"
          imgSrc={values.avatar.url}
          onChange={handleAvatarChange}
        />
        <TextField
          label="Username"
          name="username"
          type="text"
          value={values.username}
          onChange={handleChange}
        />
        <TextField
          label="Senha"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-4">
          <Link to={"/new-user/profile-config"}>
            <Button className="w-full">Back</Button>
          </Link>
          <Button>Finish</Button>
        </div>
      </form>
    </main>
  );
};

export default StepUserInfo;
