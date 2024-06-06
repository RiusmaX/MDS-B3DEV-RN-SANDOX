import { KeyboardAvoidingView, ScrollView } from 'react-native'
import styles from '../styles/ResultStyle'
import { Button, Input } from '@ui-kitten/components'
import { sanitizeClarifaiResponse } from '../utils/Strings'
import InputTags from '../components/InputTags'
import { useState } from 'react'
import { uploadProductToWooCommerce } from '../services/WCApi'

// function ResultItem ({ item }) {
//   let color = 'black'
//   if (item.value > 0.95) {
//     color = 'green'
//   } else if (item.value > 0.90 && item.value <= 0.95) {
//     color = 'orange'
//   } else if (item.value <= 0.90) {
//     color = 'red'
//   }
//   return (
//     <View style={styles.listItem}>
//       <Text style={{ color, fontWeight: 'bold' }}>{item.name}</Text>
//       <Text style={{ color, fontWeight: 'bold' }}>{(item.value * 100).toFixed(2)}%</Text>
//     </View>
//   )
// }

function ResultScreen ({ route, navigation }) {
  const { res, base64 } = route.params
  const data = sanitizeClarifaiResponse(res)
  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description,
    tags: data.tags,
    price: ''
  })

  const handleAddTag = (tag) => {
    setFormData({ ...formData, tags: [...formData.tags, tag] })
  }

  const handleRemoveTag = (tag) => {
    setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) })
  }

  const handleReset = () => {
    setFormData({
      title: data.title,
      description: data.description,
      tags: data.tags,
      price: ''
    })
  }

  const handleValidate = async () => {
    console.log(JSON.stringify(data, null, 2))
    if (formData && formData.title && formData.description && formData.price) {
      await uploadProductToWooCommerce({
        imageBase64: base64,
        title: formData.title,
        description: formData.description,
        price: formData.price,
        tags: formData.tags
      })
    } else {
      console.error('Veuillez remplir tous les champs')
    }
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1, padding: 10, gap: 10 }}>
        <Input
          name='title'
          label='Titre du produit'
          style={styles.titleInput}
          size='large'
          placeholder='Titre du produit'
          value={formData.title}
          onChangeText={(text) => setFormData({ ...formData, description: text })}
        />
        <Input
          style={styles.descriptionInput}
          label='Description du produit'
          size='large'
          multiline
          numberOfLines={10}
          placeholder='Description du produit'
          value={formData.description}
          onChangeText={(text) => setFormData({ ...formData, description: text })}
        />
        <Input
          style={styles.priceInput}
          label='Prix'
          keyboardType='numeric'
          size='large'
          placeholder='Prix du produit'
          value={formData.price}
          onChangeText={(text) => setFormData({ ...formData, price: text })}
        />
        <InputTags
          tags={formData.tags}
          onRemoveTag={handleRemoveTag}
          onAddTag={handleAddTag}
        />
        <Button onPress={handleValidate}>Valider</Button>
        <Button onPress={handleReset}>Réinitialiser</Button>
        <Button status='danger' onPress={() => navigation.goBack()}>Retour</Button>
        {/* <Text>{JSON.stringify(result, null, 2)}</Text> */}
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default ResultScreen
