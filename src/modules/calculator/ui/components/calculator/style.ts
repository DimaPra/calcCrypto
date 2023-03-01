import { Dimensions, StyleSheet } from "react-native" 
 
const SIZE = Dimensions.get('screen') 
 
export const styles = StyleSheet.create({ 
    container: { 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#09557c', 
    }, 
    output: { 
 
        height: '100%', 
        color: 'white', 
        fontSize: 100, 
        flexDirection: 'row-reverse', 
 
    }, 
    outputContainet: { 
        height: 145, 
        paddingHorizontal: 10, 
 
    }, 
    buttonWrapper: { 
        width: SIZE.width, 
        flexDirection: 'row', 
        flexWrap: 'wrap' 
    }, 
    longButton: { 
        width: SIZE.width / 2, 
        height: SIZE.width / 4, 
    }, 
    operatorStyle: { 
        backgroundColor: '#09557c' 
    } 
})