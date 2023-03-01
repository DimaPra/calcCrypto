import React, { FC } from 'react'; 
import { View } from 'react-native'; 
import { useCalculator } from '../../../presenters/useCalculator';
import { CalculatorButton } from '../calculatorButton';
import { styles } from './style';
 
interface IProps {
  onPressOperand: (value:string)=> void,
  onSetOutput:(value:string) => void,
  onCalculate:() => void,
}

export const CalculatorView: FC<IProps> = ({onPressOperand , onSetOutput ,onCalculate}) => { 
    
  return ( 
    <View style={styles.container}> 
      <View style={styles.buttonWrapper}> 
        <CalculatorButton  title={'C'} setOutput={onSetOutput} containerStyle={styles.longButton} /> 
        <CalculatorButton title={'⌦'} setOutput={onSetOutput} /> 
        <CalculatorButton 
          title={'÷'} 
          setOutput={onPressOperand} 
          containerStyle={styles.operatorStyle} 
        /> 
        <CalculatorButton title={'7'} setOutput={onSetOutput} /> 
        <CalculatorButton title={'8'} setOutput={onSetOutput} /> 
        <CalculatorButton title={'9'} setOutput={onSetOutput} /> 
        <CalculatorButton 
          title={'×'} 
          setOutput={onPressOperand} 
          containerStyle={styles.operatorStyle} 
        /> 
        <CalculatorButton title={'4'} setOutput={onSetOutput} /> 
        <CalculatorButton title={'5'} setOutput={onSetOutput} /> 
        <CalculatorButton title={'6'} setOutput={onSetOutput} /> 
        <CalculatorButton 
          title={'-'} 
          setOutput={onPressOperand} 
          containerStyle={styles.operatorStyle} 
        /> 
        <CalculatorButton title={'1'} setOutput={onSetOutput} /> 
        <CalculatorButton title={'2'} setOutput={onSetOutput} /> 
        <CalculatorButton title={'3'} setOutput={onSetOutput} /> 
        <CalculatorButton 
          title={'+'} 
          setOutput={onPressOperand} 
          containerStyle={styles.operatorStyle} 
        /> 
        
        <CalculatorButton 
          title={'0'} 
          setOutput={onSetOutput} 
          containerStyle={styles.longButton} 
        /> 
        <CalculatorButton title={'.'} setOutput={onSetOutput} /> 
        <CalculatorButton 
          title={'='} 
          setOutput={onCalculate} 
          containerStyle={styles.operatorStyle} 
        /> 
      </View> 
      <View style={styles.buttonWrapper}></View> 
    </View> 
  ); 
};