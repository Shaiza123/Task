import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";

export default styles = StyleSheet.create({
    button: {
        width: '100%',
        height: hp(7.5),
        borderRadius: wp('4%'),
        justifyContent:'center',
        alignItems:'center'
      },
      buttonText: {
        fontSize: RFPercentage(2),
        fontWeight:'bold',
        color: '#fff',
      },
});