import imagePath from "@/src/constants/imagePath";
import { router } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";
import MessageCard from "./MessageCard";

const Chats = () => {

  const data = [{
    Image:imagePath.logo,
    name:"John Doe",
    message:"Hello, how are you?",
    time:"00:00 PM",
    messageCount:1,
},
{
  Image:imagePath.logo,
  name:"Rohan Benoy",
  message:"Hello, how are you?",
  time:"9:00 PM",
  messageCount:3,
},{
  Image:imagePath.logo,
  name:"Calix Gonsalves",
  message:"Hello, how are you?",
  time:"11:00 PM",
  messageCount:0,
}];

  const onPressFunction = (name: string) => {
    router.push({
      pathname: "/chat",
      params: { name: name },
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={data} renderItem={({item})=>{
      return <MessageCard name={item?.name} message={item?.message} time={item.time} count={item?.messageCount} image={item?.Image} onPress={() => onPressFunction(item?.name)}/>
    }}/>
    </View>
  );
};

export default Chats;
