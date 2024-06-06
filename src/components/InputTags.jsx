import { Text, View } from 'react-native'
import styles from '../styles/InputTagsStyle'
import { Button, Input } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from 'react'

function Tag ({ tag, onRemoveTag }) {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>{tag}</Text>
      <Button
        appearance='ghost'
        style={styles.removeButton}
        onPress={() => onRemoveTag(tag)}
        accessoryLeft={
          <Icon
            name='delete-circle'
            size={20}
            color='black'
          />
        }
      />
    </View>
  )
}

function InputTags ({ tags, onRemoveTag, onAddTag }) {
  const [tag, setTag] = useState('')
  const handleAddTag = (tag) => {
    setTag('')
    onAddTag(tag)
  }
  return (
    <View style={styles.container}>
      {
        tags && tags.map((tag, index) => (
          <Tag key={index} tag={tag} onRemoveTag={onRemoveTag} />
        ))
      }
      <Input
        style={styles.input}
        size='large'
        placeholder='Ajouter un tag'
        onSubmitEditing={(e) => handleAddTag(e.nativeEvent.text)}
        value={tag}
        onChangeText={(text) => setTag(text)}
      />
    </View>
  )
}

export default InputTags
