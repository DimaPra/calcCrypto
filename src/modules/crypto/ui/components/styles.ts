import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingTop: 25,
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        justifyContent:'space-between'
        
    },
    containerName:{
        flexDirection: 'row',
        alignItems:'center'

    },
    image:{
        width:35,
        height:35,
    },
    text:{
        fontSize:20,
        marginLeft:20,
        color:'#fff'
        
        
    },
    price:{
        fontSize:20,
        color:'#fff'
    }
})