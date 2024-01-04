import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../WorkOutDetailScreen/style';
import TopHeader from '../../components/TopHeader/index'
import StartButton from '../../components/StartButton/index'
import Heading from '../../components/Heading/index'
import { workoutList } from '../../utils/data'
import { Card } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const WorkOutDetailScreen = ({ navigation }) => {
  function WorkOutList({ title }) {
    return (
      <TouchableOpacity>
        <Card style={styles.card} mode='contained' >
          <View style={styles.WorkOutCard}>
            <View style={styles.WorkOutCardDiv1}>
              <Card.Content>
                <Text style={styles.WorkOutCardTitle}>{title}</Text>
                <Text style={styles.WorkOutCardTime}>10-15 min</Text>
              </Card.Content>
            </View>
            <View style={styles.WorkOutCardDiv2}>
              <Card.Content style={{flexDirection:'row', justifyContent:'space-between',}}>
                <View style={styles.image}>
                  <Card.Cover source={require("../../assets/exercise.png")} style={styles.cardImage} resizeMode='contain' />
                </View>
                <View style={styles.playButton}>
                  <FontAwesome5 name="play" size={30} color="#FF8F3E" />
                  <Text style={{color:'#6B6B6B'}}>Play</Text>
                </View>
              </Card.Content>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} header1={'Workout'} header2={'Day 1'} children={'WorkOutDetailScreen'} />
      <View style={styles.content}>
        <Heading children={'Day'} />
        <View style={styles.WorkOutList}>
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={workoutList}
            renderItem={({ item }) => <WorkOutList title={item?.title} />}
            keyExtractor={item => item?.id}
          />
        </View>
        <StartButton />
      </View>
    </View>
  )
}

export default WorkOutDetailScreen 