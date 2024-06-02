import { setToLocalStorage } from "@/utlis/local-storage"

export const storeUserInfo = ({accessToken  } : {accessToken:string}) => {

    setToLocalStorage("accessToken",accessToken as string)

}