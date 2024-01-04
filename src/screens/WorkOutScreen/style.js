import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    content:{
        marginHorizontal: hp(1.8),
        gap:10,
    },
    dayList:{
        height: hp(44.5),
        width:'100%',
    },
    progressList:{
        width:'100%',
    },
    daysCard: {
        height: hp(6.5),
        width: wp(17),
        marginBottom: hp(1),
        borderRadius:hp(1),
    },
    progressCard: {
        height: hp(7.5),
        width: wp(45.5),
        borderRadius:hp(1),
        backgroundColor:"#F7AD45"
    },
    daysCardTitle: {
        fontSize: RFPercentage(1.7),        
    },
    daysCardContent:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:hp(0.5)
    },
    progressCardTitle: {
        fontSize: RFPercentage(1.8),
        width:wp(20), 
        fontWeight:'400',  
        color:"#000000"       
    },
    progressCardNumber: {
        fontSize: RFPercentage(4.5),  
        fontWeight:'700',  
        color:"#000000"       
    },
    progressCardContent:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:hp(0.8),
        flexDirection:"row",
        justifyContent:'space-between'
    },
    progressHeading:{
        color:'#000000',
        fontWeight:'700',
        lineHeight:hp(2)
    },
});