import create from "zustand";
import { doSignUp } from "../repositories/auth/auth";
import { configurePersist } from "zustand-persist";
import { IRegister } from "../common/interfaces/register";
interface AuthStoreModel {
  user: any;
  authToken: string;
  error: string;
  signUp: (data: IRegister) => Promise<void>;
}

const { persist, purge } = configurePersist({
  storage: localStorage, // use `AsyncStorage` in react native
  rootKey: "root", // optional, default value is `root`
});

const useRegisterStore = create<AuthStoreModel>(
  persist(
    {
      key: "auth", // required, child key of storage
      allowlist: ["authToken"], // optional, will save everything if allowlist is undefined
    },
    (set) => ({
      user: {},
      authToken: "",
      error: "",
      signUp: async ({ email, password, username, cellPhone }: IRegister) => {
        return new Promise(async (resolve, reject) => {
          try {
            console.log({ email, password, username, cellPhone })
            const res = await doSignUp({ email, password, username, cellPhone });
            resolve(res)
          } catch (err: any) {
            console.log(err);
            reject(new Error(err.response))
          }
        })
      },
    })
  )
);

export default useRegisterStore;
