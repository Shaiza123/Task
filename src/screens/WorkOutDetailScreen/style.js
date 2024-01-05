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
    image: {
        alignSelf: 'center',
        width: hp(10),
        height: hp(10),
    },
    cardImage: {
        height: '100%',
        width: '100%',
        backgroundColor: "#fff",
    },
    playButton: {
        alignSelf: 'center',
        width: hp(7),
        height: hp(6),
        flexDirection:'column'
    },
    WorkOutList:{
        height: hp(58),
        width:'100%',
    },
    card:{
        backgroundColor:"#fff"
    },
    WorkOutCard: {
        height: hp(10.5),
        width:'100%',
        flexDirection:'row',
        marginBottom:hp(1),
    },
    WorkOutCardTitle: {
        fontSize: RFPercentage(2),
        width:wp(25), 
        fontWeight:'500',  
        color:"#000000"       
    },
    WorkOutCardTime: {
        fontSize: RFPercentage(1.8),
        width:wp(25), 
        fontWeight:'400',  
        color:"#fff"       
    },
    WorkOutCardDiv1:{
        width:"50%",
        height:hp(10.5),
        justifyContent:'center',
        flexDirection:"column",
        backgroundColor:"#FF8F3E",
        borderTopLeftRadius:hp(1),
        borderBottomLeftRadius:hp(1)
    },
    WorkOutCardDiv2:{
        width:"50%",
        height:hp(10.5),
        backgroundColor:"#fff", 
        borderTopRightRadius:hp(1),
        borderBottomRightRadius:hp(1)
    },
});