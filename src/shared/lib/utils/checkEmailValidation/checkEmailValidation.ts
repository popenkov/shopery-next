import { EMAIL_REGEX } from './email-regex';

export const checkEmailValidation = (inputValue: string) => {
  return EMAIL_REGEX.test(inputValue);
};
