import React from "react";
import { FC } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ICypto } from "../../../entities/crypto/ICrypto";
import { styles } from "./styles";

interface IProps {
    crypto: ICypto;
    onPressCoin: (value: ICypto) => void;
};

export const CtryptoItem: FC<IProps> = ({ crypto, onPressCoin }) => {
    const onPress = () => {
        onPressCoin(crypto);
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.containerName}>
                <Image style={styles.image} source={{ uri: crypto.image }} />
                <Text style={styles.text}>{crypto.name}</Text>
            </View>
            <Text style={styles.price}>$ {crypto.current_price}</Text>
        </TouchableOpacity>
    );
};