import React, { FC } from "react";
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CalculatorScreen } from "../../modules/calculator/ui/CalculatorScreen";
import { CriptoScren } from "../../modules/crypto/ui/CriptoScren";
const Stack = createNativeStackNavigator();

export const StackNavigator:FC  = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calculator" component={CalculatorScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Cripto" component={CriptoScren} options={{title: 'Currency',headerStyle:{backgroundColor:'#084e71'}}}/>
    </Stack.Navigator>

  );
};
