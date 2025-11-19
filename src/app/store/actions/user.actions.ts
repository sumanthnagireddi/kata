import { createAction, props } from "@ngrx/store";

export enum UserActionTypes {
  getUsers = "[users] Get Users",
  getUsersSuccess = "[users] Get Users Success",
  getUsersFailure = "[users] Get Users Failure",
  addUser = "[users] Add User",
  addUserSuccess = "[users] Add User Success",
  addUserFailure = "[users] Add User Failure",
  updateUser = "[users] Update User",
  updateUserSuccess = "[users] Update User Success",
  updateUserFailure = "[users] Update User Failure",
  deleteUser = "[users] Delete User",
  deleteUserSuccess = "[users] Delete User Success",
  deleteUserFailure = "[users] Delete User Failure",
  getUserById = "[users] Get User By Id",
  getUserByIdSuccess = "[users] Get User By Id Success",
  getUserByIdFailure = "[users] Get User By Id Failure",
  clearUsers = "[users] Clear Users"


}

export const getProducts = createAction(UserActionTypes.getUsers)
