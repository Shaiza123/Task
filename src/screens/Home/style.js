import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        height: hp(17),
        width: wp(46),
        marginBottom: hp(1),
        backgroundColor: "#EFE2E1",
        paddingVertical: hp(1.9),
        borderRadius:hp(1)
    },
    image: {
        alignSelf: 'center',
        width: hp(8),
        height: hp(8),
    },
    cardImage: {
        height: '100%',
        width: '100%',
        backgroundColor: "#EFE2E1",
    },
    cardContent: {
        marginTop: hp(2),
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: RFPercentage(2.2),
        color: '#000',
        fontWeight: '500',
        textAlign: 'center',
    },
    cardContainer: {
        marginHorizontal: hp(1.8),
        marginVertical:hp(1)
        // backgroundColor:'pink'
    }
});