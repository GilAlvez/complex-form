export enum Actions {
  HANDLE_CHANGE = "HANDLE_CHANGE",
  HANDLE_CHANGE_ADDRESS = "HANDLE_CHANGE_ADDRESS",
  HANDLE_CHANGE_AVATAR = "HANDLE_CHANGE_AVATAR",
}

export type UserActions =
  | {
      type: Actions.HANDLE_CHANGE;
      payload: { name: string; value: string };
    }
  | {
      type: Actions.HANDLE_CHANGE_ADDRESS;
      payload: { name: string; value: string };
    }
  | {
      type: Actions.HANDLE_CHANGE_AVATAR;
      payload: FileList;
    };
