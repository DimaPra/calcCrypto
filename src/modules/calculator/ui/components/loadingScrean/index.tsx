import React from "react";
import { FC } from "react";
import { ActivityIndicator, View , Text} from "react-native";
import { LogoSvg } from "../../../../../../assests/icon/logoSvg";
import { styles } from "./styles";

export const LoadingScrean:FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <LogoSvg/>
            </View>
            <Text style={styles.textLogo}>CRYPTO CURRENCY</Text>
            <ActivityIndicator size='large' color="#fff" style={styles.activity}/>
        </View>
    )

}