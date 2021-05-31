import React from "react";
import Card from "../pages/Register/Card";

const INITIAL_STATE = {
  field: {
    email: "",
    password: "",
    username: "",
    confirm: "",
  },
  card: "",
  color: {
    characters: "cancel",
    upper: "cancel",
    lower: "cancel",
    special: "cancel",
  },
  close: false,
  icon: "lock_open",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PERSON_CHANGED":
      return {
        ...state,
        field: { ...state.field, username: action.payload },
      };
    case "EMAIL_CHANGED":
      return {
        ...state,
        field: { ...state.field, email: action.payload },
      };
    case "PASSWORD_CHANGED":
      return {
        ...state,
        field: { ...state.field, password: action.payload },
      };
    case "CONFIRM_CHANGED":
      return {
        ...state,
        field: { ...state.field, confirm: action.payload },
      };

    //Card Reducers
    case "CARD_OPENED":
      return {
        ...state,
        card: <Card color={state.color} />,
        color: state.color,
        close: false,
        icon: "lock_open",
      };
    case "CARD_CLOSED":
      return {
        ...state,
        card: "",
        color: state.color,
        close: true,
        icon: "lock_outlined",
      };
    case "VERIFIED_PASSWORD":
      return {
        ...state,
        color: action.payload,
        card: <Card color={state.color} />,
        close: action.close,
        icon: state.icon,
      };
    default:
      return state;
  }
};
