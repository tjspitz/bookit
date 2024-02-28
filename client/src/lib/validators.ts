import { Validators } from "./types";

/**
 * @description
 * an object in which each key holds a function as its value;
 * each function takes a string (form input) as it arg,
 * and returns a boolean based upon validation criteria
 */
export const validators: Validators = {
  email: (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  },
  name: (name) => {
    const regex = /^[a-zA-Z-]+$/;
    return regex.test(name);
  },
  station: (station) => !!station,
  date: (date) => {
    const today = new Date();
    return new Date(date) > today;
  },
  train: (trainNo) => trainNo.length === 7,
  password: (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*_+\-=])[a-zA-Z0-9~!@#$%^&*_+\-=]{6,12}$/;
    return regex.test(password);
  }
};
