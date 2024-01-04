import { View, Text, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../Home/style';
import TopHeader from '../../components/TopHeader/index'
import { Card } from 'react-native-paper';
import { mentalHealth} from '../../utils/data'

function ItemList({ image, category, navigation }) {
  const selectedCategory = () => {
    navigation?.navigate('WorkOutScreen')
  }
  return (
    <TouchableOpacity onPress={selectedCategory}>
      <Card style={styles.card} mode='contained'>
        <View style={styles.image}>
          <Card.Cover source={image} style={styles.cardImage} resizeMode='contain' />
        </View>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.cardTitle}>{category}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} header1={'Mental Health'} children={'Home'} />
      <View style={styles.cardContainer}>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={mentalHealth}
        renderItem={({ item }) => <ItemList image={item.image} category={item.category} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
      </View>
    </View>
  )
}

export default Home