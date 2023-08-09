import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const HashtagComponent = ({ text, onPress }) => {
  const parts = text.split(/(#\w+)/);
  return (
    <Text>
      {parts.map((part, index) => {
        if (/#\w+/.test(part)) {
          return (
            <TouchableOpacity key={index} onPress={() => onPress(part)}>
              <Text style={styles.hashtag}>{part}</Text>
            </TouchableOpacity>
          );
        }
        return <Text key={index}>{part}</Text>;
      })}
    </Text>
  );
};

const styles = StyleSheet.create({
  hashtag: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default HashtagComponent;
