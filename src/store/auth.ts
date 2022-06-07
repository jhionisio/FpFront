import create from "zustand";
import { doLogin } from "../repositories/auth/auth";
import { configurePersist } from "zustand-persist";
import { ILogin } from "../common/interfaces/login";
interface AuthStoreModel {
  user: any;
  authToken: string;
  error: string;
  login: (data: ILogin) => Promise<void>;
}

const { persist, purge } = configurePersist({
  storage: localStorage, // use `AsyncStorage` in react native
  rootKey: "root", // optional, default value is `root`
});

const useAuthStore = create<AuthStoreModel>(
  persist(
    {
      key: "auth", // required, child key of storage
      allowlist: ["authToken"], // optional, will save everything if allowlist is undefined
    },
    (set) => ({
      user: {},
      authToken: "",
      error: "",
      login: async ({ username, password }: ILogin) => {
        return new Promise(async (resolve, reject) => {
          try {
            console.log({ username, password })
            const res = await doLogin({ username, password });
            console.log(res.access_token)
            set({authToken: res.access_token})
            resolve(res.access_token)
          } catch (err: any) {
            console.log(err);
            reject(new Error(err.response))
          }
        })
      },
    })
  )
);

export default useAuthStore;
