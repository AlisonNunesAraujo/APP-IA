import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#121212',
    },
    form:{
        width:'100%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        backgroundColor:'lightgray',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
        marginBottom:10,
        fontFamily:'Arial',
    },
    input:{
        width:'80%',
        height:40,
        backgroundColor:'white',    
        borderRadius:5,
        padding:10,
        borderWidth:1,
        borderColor:'gray',
        marginBottom:10,

    },
    button:{
        width:'80%',
        height:40,
        backgroundColor:'blue',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
        fontFamily:'Arial',
    },
    photo:{},

});