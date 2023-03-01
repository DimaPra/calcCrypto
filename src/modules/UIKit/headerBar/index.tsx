import React from "react";
import { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const HeaderBar:FC = () =>{

    return(
        <View style={styles.container}>
          <Text style={styles.logo}>Crypto Currency</Text>
        </View>
    )
}