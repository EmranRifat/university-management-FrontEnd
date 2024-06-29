"use client";
import { Button, Col, Input, Row } from "antd";
import loginImage from "../../assets/Privacy policy-rafiki.svg";
import Image from "next/image";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import LoginForm from "@/components/Forms/LoginForm";
import { getUserInfo, loggedIn, storeUserInfo } from "@/services/auth.service";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";

  type FormValues = {
    id: string;
    password: string;
  };

  const LoginPage = () => {
    const [userLogin]=useUserLoginMutation();
    const router=useRouter();
    
    console.log("decodedData",getUserInfo())
    console.log(loggedIn())
  
    const onSubmit: SubmitHandler<FormValues> = async(data : any) => {
      try {
       const res= await userLogin({...data}).unwrap();
        if( res?.data?.accessToken){
          router.push("/profile");
        }




       storeUserInfo({accessToken: res?.data?.accessToken})
       console.log(res)

      } 

      catch (err:any) {
        console.log(err.message)
      }
    };

  return (
    
    <Row
      justify="center"
      align="middle"
      style={{
      minHeight: "100vh",
      
    }}
     >

      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
        
        <LoginForm submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
          
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"   
                type="password"
                size="large"
                label="User Password"
              />
            </div>

            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </LoginForm>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;