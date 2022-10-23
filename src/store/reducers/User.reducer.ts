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
    tags: [],

    address: {
      label: "",
      country: "",
      city: "",
      postal_code: "",
      state: "",
      street: "",
    },

    plan_id: "",

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

    case Actions.ADD_TAG:
      const tags = payload.value.split(/[,.\s]/).filter(Boolean);
      return {
        ...state,
        data: { ...state.data, tags: [...new Set([...state.data.tags, ...tags])] },
      };

    case Actions.REMOVE_TAG:
      const tagsRemoveFilter = [
        ...state.data.tags.slice(0, payload.index),
        ...state.data.tags.slice(payload.index + 1),
      ];
      return { ...state, data: { ...state.data, tags: tagsRemoveFilter } };

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

    case Actions.HANDLE_NEXT_STEP:
      const { step } = payload;
      return {
        ...state,
        status: { ...state.status, [`step${step}`]: true },
      };

    default:
      return state;
  }
};
