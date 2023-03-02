import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { FC } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native"
import { HeaderBar } from "../../../UIKit/headerBar";
import { useCalculator } from "../../presenters/useCalculator";
import { CalculatorView } from "../components/calculator";
import { LoadingScrean } from "../components/loadingScrean";
import { styles } from './style'

export const CalculatorScreen: FC = () => {
    const { isLoading, output, onPressOperand, onSetOutput, onCalculate, coin, remainder } = useCalculator()
    const navigation = useNavigation<NavigationProp<any>>()

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <LoadingScrean />
            ) : (
                <View>
                    <HeaderBar />
                    <View style={styles.containerBtn}>
                        <TouchableOpacity style={styles.btncrypn} onPress={() => navigation.navigate("Cripto")}>
                            <View style={styles.Symbol}>
                            <Text style={styles.text}>{coin?.symbol?.toUpperCase() || 'Select Coin'}</Text>
                                <Image style={styles.image} source={{ uri: coin?.image }} />
                            </View>
                            <Text style={styles.text}>{output}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btncrypn} >
                            <Text style={styles.text}>USD</Text>
                            <Text style={styles.text}>$ {remainder || 0 || '0'}</Text>
                        </TouchableOpacity>
                        <CalculatorView onCalculate={onCalculate} onPressOperand={onPressOperand} onSetOutput={onSetOutput} />
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

