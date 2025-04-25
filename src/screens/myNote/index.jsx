import {StyleSheet, SafeAreaView, View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/ui/floatActionButton';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE} from '../../utils/router';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';
import {useEffect, useState} from 'react';

const MyNote = () => {
  const navigation = useNavigation();

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Fullstack developer',
      description: 'Bu birinci notun açıklamasıdır',
      date: '12:25',
    },
    {
      id: 2,
      title: 'Software Developer',
      description: 'Bu ikinci notun açıklamasıdır',
      date: '12:30',
    },
    {
      id: 3,
      title: 'React Frontend Developer',
      description: 'Bu üçüncü notun açıklamasıdır',
      date: '13:55',
    },
    {
      id: 4,
      title: 'Mobile Developer',
      description: 'Bu dördüncü notun açıklamasıdır',
      date: '15:00',
    },
  ]);

  let note1 = {
    id: 5,
    title: 'Frontend Developer',
    description: 'Bu beşinci notun açıklamasıdır',
    date: '15:50',
  };
  let note2 = {
    id: 6,
    title: 'Frontend Developer',
    description: 'Bu altıncı notun açıklamasıdır',
    date: '15:50',
  };
  let note3 = {
    id: 7,
    title: 'UI Designer',
    description: 'Bu yedinci notun açıklamasıdır',
    date: '17:15',
  };
  // Ekleme fonksiyonu
  const addNote = item => {
    if (item) {
      setNotes([...notes, item]);
    }
  };

  // Silme işlemleri

  const deleteNote = id => {
    const updateItems = notes.filter(item => item.id !== id);
    setNotes(updateItems);
  };

  useEffect(() => {
    setTimeout(() => {
      setNotes([...notes, note2]);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard item={item} deleteItem={item => deleteNote(item.id)} />
          )}
          keyExtractor={item => item.id.toString()}
        />
        <FloatActionButton
          // onPress={() => addNote(note1)}
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNote;

const styles = StyleSheet.create({});
