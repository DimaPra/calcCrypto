import React, { FC } from "react";
import { View} from "react-native";
import { FlatList } from "react-native";
import { useCrypto } from "../../presenters/useCrypto";
import { CtryptoItem } from "../components";
import { styles } from "./style";

export const CriptoScren:FC = () =>{
    const {crypto, onPressCoin} = useCrypto()
    return(
        <View style={styles.container}>
            <FlatList
            data={crypto} 
            renderItem={({item})=> <CtryptoItem crypto={item} onPressCoin={onPressCoin}/>}
            showsVerticalScrollIndicator={false}/>
        </View>
    )
}
