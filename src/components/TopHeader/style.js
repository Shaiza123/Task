import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:hp(1.5),
        backgroundColor:'#5E3B63'
    },
    text1:{
        fontSize: RFPercentage(3),
        color: '#fff',
        fontWeight: 'bold',
    },
    text2Div:{
        marginHorizontal:hp(2),
        borderWidth:hp(0.2),
        paddingHorizontal:hp(1.5),
        paddingVertical:hp(0.5),
        borderColor:"#fff",
        borderRadius:hp(3),
    }
    
});