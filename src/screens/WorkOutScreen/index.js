import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../WorkOutScreen/style';
import TopHeader from '../../components/TopHeader/index'
import StartButton from '../../components/StartButton/index'
import Heading from '../../components/Heading/index'
import { workOutDays, progressList } from '../../utils/data'
import { Card } from 'react-native-paper';
import { RFPercentage } from "react-native-responsive-fontsize";

const WorkOutScreen = ({ navigation }) => {
  function DaysList({ date, day, status, navigation }) {
    const selectedDay = () => {
      navigation?.navigate('WorkOutDetailScreen')
    }
    return (
      <TouchableOpacity onPress={selectedDay}>
        <Card style={[styles.daysCard, { backgroundColor: status === 'active' ? "#5E3B63" : status === 'pending' ? "#FF8F3E" : "#fff" }]} mode='contained'>
          <Card.Content style={styles.daysCardContent}>
            <Text style={[styles.daysCardTitle, { color: status === 'active' ? "#FFFFFF" : "#151515", fontSize: RFPercentage(2.5), fontWeight: "700", }]}>{date}</Text>
            <Text style={[styles.daysCardTitle, { color: status === 'active' ? "#FFFFFF" : "#151515" }]}>{day}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  }

  function ProgressList({ title, number }) {
    return (
      <TouchableOpacity>
        <Card style={styles.progressCard} mode='contained'>
          <Card.Content style={styles.progressCardContent}>
            <Text style={styles.progressCardTitle}>{title}</Text>
            <Text style={styles.progressCardNumber}>{number}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} header1={'Workout'} header2={''} children={'WorkOutScreen'} />
      <View style={styles.content}>
        <Heading children={'Level'} />
        <View style={styles.dayList}>
          <FlatList
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            numColumns={5}
            data={workOutDays}
            renderItem={({ item }) => <DaysList date={item?.date} day={item?.day} status={item?.status} navigation={navigation} />}
            keyExtractor={item => item?.id}
          />
        </View>
        <View>
          <Text style={styles.progressHeading}>Progress</Text>
        </View>
        <View style={styles.progressList}>
          <FlatList
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={progressList}
            renderItem={({ item }) => <ProgressList title={item?.title} number={item?.number} />}
            keyExtractor={item => item?.id}
          />
        </View>
        <StartButton />
      </View>
    </View>
  )
}

export default WorkOutScreen 