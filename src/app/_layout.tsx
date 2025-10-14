import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [isLogin, setIsLogin] = useState(true);//login alway true for now since login is not required and not mentioned in the project requirements and project UI.
    
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hideAsync();
        }, 2000);
    }, []);
    
    return (
        <>
            <Stack screenOptions={{ headerShown: false }} />
            {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
        </>
    );
};

export default RootLayout;   