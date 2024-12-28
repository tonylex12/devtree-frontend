export type User = {
  handle: string;
  name: string;
  email: string;
  id: string;
};

export type RegisterForm = Pick<User, "name" | "email" | "handle"> & {
  password: string;
  password_confirmation: string;
};

export type LoginForm = Pick<User, "email"> & {
  password: string;
};
