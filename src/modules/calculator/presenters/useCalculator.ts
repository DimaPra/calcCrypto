import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { selectCoin } from "../../entities/crypto/cryptoSlice";
import { ICypto } from "../../entities/crypto/ICrypto";



export const useCalculator = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [output, setOutput] = useState('0');
  const [firstValue, setFirstValue] = useState('');
  const [operand, setOperand] = useState('');
  const [dollar, setDollar] = useState(0);
  const coin: ICypto = useSelector(selectCoin)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])

  useEffect(() => {
    setDollar(Number(output) * Number(coin.current_price))
  }, [output])

  const onPressOperand = (value: string) => {
    setFirstValue(output);
    setOutput("0");
    setOperand(value);
  };

  const onCalculate = () => {
    switch (operand) {
      case '+':
        const resultPlus = Number(output) + Number(firstValue);
        setOutput(resultPlus.toString());
        setOperand('');
        break;
      case '-':
        const resultMinus = Number(firstValue) - Number(output);
        setOutput(resultMinus.toString());
        setOperand('');
        break;
      case '÷':
        const resultDivision = Number(firstValue) / Number(output);
        setOutput(resultDivision.toString());
        setOperand('');
        break;
      case '×':
        const resultMulti = Number(output) * Number(firstValue);
        setOutput(resultMulti.toString());
        setOperand('');
        break;
    }
  };

  const onSetOutput = (value: string) => {
    if (value === 'C') {
      setOutput('0');
      setOperand('')
    } else if (value === '⌦') {
      if (output.length === 1) {
        setOutput('0');
      } else {
        setOutput(prev => prev.substring(0, prev.length - 1));
      }


    } else if (value === '.' && output.includes('.') ||
      output === '0' && output.length === 1 && value === '0') {
      return
    } else if (output === '0' && output.length === 1 && value !== '.') {
      setOutput(value);
    } else {
      setOutput(prev => prev + value);
    }


  }
  return { isLoading, onPressOperand, onSetOutput, onCalculate, output, coin, dollar }
}