import { UserState } from "../../types/User";
import { Actions, UserActions } from "../actions/User.actions";

export const initialState: UserState = {
  status: {
    created: false,
    loggedIn: false,
  },
  data: {
    id: 1,
    first_name: "",
    last_name: "",
    genre: "",
    register_number: "",
    mother_name: "",
    birthday: "",
    description: "",
    website: "",
    twitter: "",
    occupation: "",
    company: "",
    phone: "",
    tags: "",

    address: {
      street: "",
      number: "",
      zipcode: "",
      neighborhood: "",
      complement: "",
      state: "",
      city: "",
      country: "",
    },

    product_id: 1,

    email: "",
    avatar: {
      image: null,
      url: "",
    },
    username: "",
    password: "",
  },
};

export const userReducer = (state: UserState, action: UserActions): UserState => {
  const { type, payload } = action;

  switch (type) {
    case Actions.HANDLE_CHANGE:
      return { ...state, data: { ...state.data, [payload.name]: payload.value } };

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
