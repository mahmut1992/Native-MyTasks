import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screenStyle} from '../../styles/screenStyle';
import {AppColors} from '../../theme/color';
import Button from '../../components/ui/button';
import {getRandomNumber} from '../../utils/functions';

const AddNote = ({route}) => {
  const {note, type} = route.params;
  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);
  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptionRequired, setDescriptionRequired] = useState(false);
  const saveNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);

    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
    }

    const form = {
      id: getRandomNumber(1, 100),
      title: title,
      description: description,
      date: '12:45',
    };

    console.log(form);
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{flex: 1, padding: 10}}>
          <Text style={{fontWeight: '500', fontSize: 16, marginVertical: 10}}>
            Başlık
          </Text>
          <TextInput
            value={title}
            onChangeText={text => setTitle(text)}
            placeholder="Lütfen bir başlık giriniz..."
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 90,
              marginVertical: 10,
            }}
          />
          {titleRequired && (
            <Text
              style={{fontWeight: '200', fontSize: 16, color: AppColors.RED}}>
              Lütfen Başlık Alanını Doldurunuz...!
            </Text>
          )}
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              marginTop: 20,
              marginVertical: 10,
            }}>
            Açıklama
          </Text>
          <TextInput
            value={description}
            onChangeText={text => setDescription(text)}
            placeholder="Lütfen notunuzu bu alana yazınız..."
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 180,
              marginVertical: 10,
            }}
          />
          {descriptionRequired && (
            <Text
              style={{fontWeight: '200', fontSize: 16, color: AppColors.RED}}>
              Lütfen Açıklama Alanını Doldurunuz...!
            </Text>
          )}
        </View>
        <View>
          <Button
            onPress={saveNote}
            title={type == 'update' ? 'Güncelle' : 'Kaydet'}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: AppColors.PRIMARY,
              padding: 15,
              paddingVertical: 15,
              borderRadius: 20,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
