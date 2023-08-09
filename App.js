import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import HashtagComponent from './HashtagComponent';

const App = () => {
  const [postText, setPostText] = useState('');
  const [hashtags, setHashtags] = useState([]);
  const [postList, setPostList] = useState([]);

  const handlePostTextChange = (text) => {
    setPostText(text);
    // Captura as hashtags presentes no texto e as armazena no estado de hashtags
    const regex = /(#\w+)/g;
    const extractedHashtags = text.match(regex);
    setHashtags(extractedHashtags || []);
  };

  const handlePostSubmit = () => {
    // Cria uma nova postagem com o texto digitado e as hashtags capturadas
    const newPost = {
      text: postText,
      hashtags: hashtags,
    };
    setPostList((prevPostList) => [newPost, ...prevPostList]);
    setPostText('');
    setHashtags([]);
  };

  const handleHashtagPress = (hashtag) => {
    // Ação a ser executada quando uma hashtag é pressionada
    console.log('Hashtag pressionada:', hashtag);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escreva seu post..."
          value={postText}
          onChangeText={handlePostTextChange}
        />
        <Button title="Publicar" onPress={handlePostSubmit} />
      </View>
      <FlatList
        data={postList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <HashtagComponent text={item.text} onPress={handleHashtagPress} />
            <Text style={styles.hashtags}>
              Hashtags: {item.hashtags.join(', ')}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 8,
    fontSize: 16,
  },
  postContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  hashtags: {
    color: 'gray',
    marginTop: 5,
    fontSize: 14,
  },
});

export default App;
