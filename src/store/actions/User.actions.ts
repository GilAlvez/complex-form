export enum Actions {
  HANDLE_CHANGE = "HANDLE_CHANGE",
  HANDLE_SELECT_ADDRESS = "HANDLE_SELECT_ADDRESS",
  HANDLE_CHANGE_ADDRESS = "HANDLE_CHANGE_ADDRESS",
  HANDLE_CHANGE_AVATAR = "HANDLE_CHANGE_AVATAR",
}

export type UserActions =
  | {
      type: Actions.HANDLE_CHANGE;
      payload: { name: string; value: string };
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
    };
