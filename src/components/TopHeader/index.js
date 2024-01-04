import { View, Text } from 'react-native'
import React from 'react'
import styles from '../TopHeader/style';
import BackButton from '../../components/BackButton/index'

const TopHeader = ({ navigation, header1, header2 ,children}) => {
    return (
        <View style ={styles.header}>
            <BackButton navigation={navigation} children={children}/>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.text1}>{header1}</Text>
            </View>
            {children === "WorkOutDetailScreen" ? 
            <View style={styles.text2Div}>
            <Text style={{color:'#fff'}}> {header2}</Text>
            </View>
            : 
            ""}
        </View>
    )
}
export default TopHeader