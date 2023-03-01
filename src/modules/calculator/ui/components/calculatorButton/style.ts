import { Dimensions, StyleSheet } from "react-native" 
 
const SIZE = Dimensions.get('screen') 
 
export const styles = StyleSheet.create({ 
    container: { 
        width: SIZE.width / 4, 
        height: SIZE.width / 4, 
        backgroundColor: '#09557c', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: 'grey', 
        borderWidth: 0.2, 
 
    }, 
    title: { 
        color: 'white', 
        fontSize: 40, 
        fontWeight: '900', 
    } 
 
})