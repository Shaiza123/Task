import { View ,Text} from 'react-native'
import React from 'react'
import styles from '../Heading/style';

const Heading = ({children}) => {
    return (
        <View>
        <Text style={styles.level}>{children}<Text style={{ fontWeight: '800' }}> 1</Text></Text>
      </View>
    )
}
export default Heading