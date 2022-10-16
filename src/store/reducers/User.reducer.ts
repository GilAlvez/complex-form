import { UserState } from "../../types/User";
import { Actions, UserActions } from "../actions/User.actions";

export const initialState: UserState = {
  status: {
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  },
  data: {
    first_name: "",
    last_name: "",
    genre: "",
    birthday: "",
    description: "",
    website: "",
    countryCode: "",
    phone: "",
    tags: "",

    address: {
      label: "",
      country: "",
      city: "",
      postal_code: "",
      state: "",
      street: "",
    },

    plan_id: "1",

    avatar: { image: null, url: "" },
    email: "",
    username: "",
    password: "",
  },
};

export const userReducer = (state: UserState, action: UserActions): UserState => {
  const { type, payload } = action;

  switch (type) {
    case Actions.HANDLE_CHANGE:
      return { ...state, data: { ...state.data, [payload.name]: payload.value } };

    case Actions.HANDLE_SELECT_ADDRESS:
      return {
        ...state,
        data: { ...state.data, address: payload },
      };

    case Actions.HANDLE_CHANGE_ADDRESS:
      return {
        ...state,
        data: { ...state.data, address: { ...state.data.address, [payload.name]: payload.value } },
      };

    case Actions.HANDLE_CHANGE_AVATAR:
      const image = payload[0];
      const url = image && URL.createObjectURL(payload[0]);
      return { ...state, data: { ...state.data, avatar: { image, url } } };

    default:
      return state;
  }
};
