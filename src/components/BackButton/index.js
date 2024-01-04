import React from 'react'
import styles from '../BackButton/style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IconButton } from 'react-native-paper';

const BackButton = ({ navigation, children }) => {
    return (
        <IconButton style={styles.button}  onPress={() => {
            if (children === 'Home') {
                console.log('will not navigate');
            } else {
                navigation.goBack();
            }
        
        }} icon="arrow-left" size={hp(3.5)} iconColor="#fff" />
    )
}
export default BackButton