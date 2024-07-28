import { authKey } from './../components/Constants/storageKey';
import { decodedToken } from "@/utlis/jwt"
import { getFromLocalStorage, setToLocalStorage } from "@/utlis/local-storage"

export const storeUserInfo = ({accessToken} : {accessToken:string}) => {

   return setToLocalStorage(authKey , accessToken as string)

}

export const getUserInfo=()=>{
    const authToken= getFromLocalStorage(authKey)
    // console.log("authToken",authToken);
    if(authToken){
        const decodedData=decodedToken(authToken)
        return decodedData;
    }
    
    else {
        return ""
    }
}

export const loggedIn=()=>{
    const authToken= getFromLocalStorage(authKey)
    return !!authToken

}     

export const  removeUserInfo=()=>{
 localStorage.removeItem(authKey)
}