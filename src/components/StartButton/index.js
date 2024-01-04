import { View ,Text} from 'react-native'
import React from 'react'
import styles from '../StartButton/style';
import { Button } from 'react-native-paper';

const StartButton = () => {
    return (
        <View>
        <Button style={styles.button} mode='contained' buttonColor={'#D26E25'} onPress={()=>console.log("Google Button Pressed")} >
          <Text style={styles.buttonText}>Start</Text>
        </Button>
      </View>
    )
}
export default StartButton