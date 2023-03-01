import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCoin, saveCrypto, selectCrypto } from "../../entities/crypto/cryptoSlice";
import { getCoin } from "../../calculator/useCases/getCoin";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ICypto } from "../../entities/crypto/ICrypto";

export const useCrypto = () => {
    const [isLoading, setIsLoading] = useState(false);
    const crypto = useSelector(selectCrypto)
    const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<any>>();
    useEffect(() => {
      getCrypto();
    }, []);
  
    const onPressCoin = (coin:ICypto)=> {
      dispatch(saveCoin(coin))
      navigation.navigate('Calculator')
      console.log(coin);
      
    }

    const getCrypto = async () => {
      setIsLoading(true)
      const response = await getCoin();
      if (response?.status === 200) {
        dispatch(saveCrypto(response?.data));
      };
      setIsLoading(false);
    }
    return { isLoading, crypto ,onPressCoin}
  
  
  
  }