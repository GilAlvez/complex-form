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

    productId: 1,

    email: "",
    avatar: "",
    username: "",
    password: "",
  },
};

export const userReducer = (state: UserState, action: UserActions): UserState => {
  const { type, payload } = action;

  switch (type) {
    case Actions.HANDLE_CHANGE:
      const data = { ...state.data, [payload.name]: payload.value };
      return { ...state, data };
    default:
      return state;
  }
};
