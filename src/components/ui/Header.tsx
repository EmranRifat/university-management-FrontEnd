import React from 'react';
import {Avatar, Button, Dropdown, Layout, MenuProps, Row, Space} from "antd";
const {Header:AntHeader} = Layout;
import { UserOutlined } from '@ant-design/icons';
import { removeUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { authKey } from '../Constants/storageKey';

const Header = () => {
    const router=useRouter();
    const logOut=()=>{
        removeUserInfo();
        router.push("/login");

    }
    const items: MenuProps["items"]=[
        {
            key:"0",
            label:(
                <Button onClick={logOut} type='text' danger>LogOut</Button>
            ),
        }
    ]
    
    return (
     <AntHeader style={{background:"#FFFF"}}>
        <Row justify={"end"} align={"middle"}
        style={{height:"100%"}}>
            <Dropdown   menu={{items}}>
              <a>
                <Space wrap size={16}>
                <Avatar size={"large"} icon={<UserOutlined />} />
                 </Space>
              </a>
            </Dropdown>
        </Row>
    </AntHeader>
    )};

export default Header;