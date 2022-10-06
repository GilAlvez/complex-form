export enum Actions {
  HANDLE_CHANGE = "HANDLE_CHANGE",
}

export interface UserActions {
  type: Actions;
  payload?: any;
}
