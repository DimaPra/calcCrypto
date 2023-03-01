import {  StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#09557c'
    },
    input: {
        marginTop:20,
        marginHorizontal: 25,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        height:90,
        fontSize:50,
      },

      containerBtn:{
        
      },
      btncrypn:{
        backgroundColor:'#09557c',
        width:'100%',
        height:100,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center'
        
      }, 
      Symbol:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'

      },
      text:{
        color:'#fff',
        fontSize:25,
        fontWeight:'600'
      },
      image:{
        width:35,
        height:35,
        marginLeft:20,
    },
    textSymbol:{
      color:'#fff',
        fontSize:25,
        fontWeight:'600',
    }
})
