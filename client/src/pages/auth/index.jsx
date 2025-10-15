import victory from "../../assets/victory.svg";
//import login2 from "../../assets/login2.png";
import Background from "../../assets/Background.png"

import { Tabs, TabsList,TabsTrigger,TabsContent } from "../../components/ui/tabs";
import {Input} from "../../components/ui/input";

import { useState } from "react";
import { Button } from "../../components/ui/button";


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleLogin=async()=>{
    
  }
  const handlesignup=async()=>
  {

  }

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
     <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90wh] lg:w-[70wh] xl:w-[60wh] 2xl:w-[50wh] rounded-3xl grid xl:grid-cols-2">
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
                <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
                <img src={victory} alt="victory emoji " className="h-[100px]" />

            </div>
            <p className="font-medium text-center"> Fill in the details to continue</p>
        </div>
        <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4">
            <TabsList className="bg-transparent rounded-none w-full">
            <TabsTrigger value="Log-in"
            className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
            >Log-in</TabsTrigger>
                <TabsTrigger value="Sign-Up" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Sign-Up</TabsTrigger>
            </TabsList>
            <TabsContent value="Log-in" className=" flex flex-col gap-5 ">
              <Input
                placeholder="Email"
                type="email"
                className="rounded-full p-6 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                className="rounded-full p-6 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="rounded-full p-6" onClick={handleLogin}>Log-in</Button>
             
            </TabsContent>
            <TabsContent className=" flex flex-col gap-5"value="Sign-Up" >
            <Input
                placeholder="Email"
                type="email"
                className="rounded-full p-6 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                className="rounded-full p-6 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="ConfirmPassword"
                type="Password"
                className="rounded-full p-6 "
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
               <Button className="rounded-full p-6" onClick={handlesignup}>Sign-Up</Button>
            </TabsContent>
            </Tabs>
        </div>
     </div>
     <div className=" hidden xl:flex justify-center items-center ">
        <img src={Background} alt="Background Image" />
     </div>
     </div>
    </div>
  );
};

export default Auth;