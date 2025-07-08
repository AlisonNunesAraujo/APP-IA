import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
    },
    form:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(40, 40, 40)',
    },
    formItens:{
        width: '100%',
        height: '50%',
        padding: 10
    },
    title:{
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Inter_700Bold',
        marginBottom: 10
    },
    label:{
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Inter_400Regular',
        
    },
    inputs:{
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 6
    },
    button:{
        width: '100%',
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 6,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton:{
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Inter_400Regular',
    },
    foto:{
        width: '100%',
        height: '50%',
        backgroundColor: 'rgb(27, 23, 23)',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});