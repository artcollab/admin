export default User;

type User = {
  id: string;
  email: string;
  name: string;
  surname: string;
  username: string;
  profileID: string;
  admin?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
