export enum Actions {
  HANDLE_CHANGE = "HANDLE_CHANGE",
  HANDLE_SELECT_ADDRESS = "HANDLE_SELECT_ADDRESS",
  HANDLE_CHANGE_ADDRESS = "HANDLE_CHANGE_ADDRESS",
  HANDLE_CHANGE_AVATAR = "HANDLE_CHANGE_AVATAR",
  HANDLE_NEXT_STEP = "HANDLE_NEXT_STEP",
  ADD_TAG = "ADD_TAG",
  REMOVE_TAG = "REMOVE_TAG",
}

export type UserActions =
  | {
      type: Actions.HANDLE_CHANGE;
      payload: { name: string; value: string };
    }
  | {
      type: Actions.ADD_TAG;
      payload: { value: string };
    }
  | {
      type: Actions.REMOVE_TAG;
      payload: { index: number };
    }
  | {
      type: Actions.HANDLE_SELECT_ADDRESS;
      payload: {
        label: string;
        country?: string;
        city?: string;
        postal_code?: string;
        state?: string;
        street?: string;
      };
    }
  | {
      type: Actions.HANDLE_CHANGE_ADDRESS;
      payload: { name: string; value: string };
    }
  | {
      type: Actions.HANDLE_CHANGE_AVATAR;
      payload: FileList;
    }
  | {
      type: Actions.HANDLE_NEXT_STEP;
      payload: { step: "1" | "2" | "3" | "4" };
    };
