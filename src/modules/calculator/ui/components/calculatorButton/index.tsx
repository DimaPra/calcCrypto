import React, { FC } from 'react'; 
import { TouchableOpacity, Text, ViewStyle } from 'react-native'; 
import { styles } from './style';
 
interface IProps { 
  title: string; 
  setOutput: (value: string) => void; 
  containerStyle?: ViewStyle; 
} 
 
export const CalculatorButton: FC<IProps> = ({ title, setOutput, containerStyle }) => { 
 
  const onPress = () => { 
    setOutput(title) 
    
  } 
 
  return ( 
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}> 
      <Text style={styles.title}>{title}</Text> 
    </TouchableOpacity> 
  ); 
};