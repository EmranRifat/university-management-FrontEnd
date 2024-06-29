"use client"
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { loggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const DashboardLayout = ({children}:{children:React.ReactNode}) => {

  const userLoggedIn=loggedIn();
  const router =useRouter();
  const [isLoading,setIsLoading]=useState<boolean>(false);
  


  useEffect(()=>{
    if(!userLoggedIn){
      router.push("/login");
      setIsLoading(true)

    }
  },[router, isLoading])



  return (
   <Layout hasSider>
    <Sidebar/>
    <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;