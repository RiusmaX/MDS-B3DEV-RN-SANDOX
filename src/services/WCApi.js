import ReactNativeBlobUtil from 'react-native-blob-util'
import { saveImageToFile } from '../utils/Images'
import axios from 'axios'
import { Buffer } from 'buffer'

// Clés API WooCommerce
const consumerKey = 'ck_a4b8ceff18832f87c095b0105792c02cb2d25cc5'
const consumerSecret = 'cs_a0916bda1af93c09138c749f92e56acbd3e8edfe'

const user = 'marius@myidea.fr'
const appPassword = 'Rywr 7FTq fKQM mou1 C4XH AX94'

// URL de base de l'API WooCommerce
const baseURLWP = 'https://sandbox.sergent.dev/wp-json/wp/v2'
const baseURLWC = 'https://sandbox.sergent.dev/wp-json/wc/v3'

const uploadProductToWooCommerce = async ({ imageBase64, title, description, price, tags }) => {
  try {
    // Chemin du fichier image
    const imagePath = `${ReactNativeBlobUtil.fs.dirs.CacheDir}/image_${Date.now()}.png`

    // Sauvegarder l'image base64 en fichier PNG
    await saveImageToFile(imageBase64.replace(/^data:image\/png;base64,/, ''), imagePath)

    // Créer une nouvelle instance de FormData
    const form = new FormData()
    form.append('file', {
      uri: `file://${imagePath}`,
      type: 'image/png',
      name: `image_${Date.now()}.png`
    })

    // Télécharger l'image vers la médiathèque de WooCommerce
    const imageResponse = await axios.post(`${baseURLWP}/media`, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Basic ${Buffer.from(`${user}:${appPassword}`).toString('base64')}`
      }
    })

    console.log('Image envoyée dans WooCommerce :', imageResponse.data)

    // URL de l'image téléchargée
    const imageId = imageResponse.data.id

    // Données des tags
    const tagData = tags.map(tag => ({ name: tag }))

    // Données du produit
    const productData = {
      name: title,
      type: 'simple',
      regular_price: price,
      description,
      short_description: description,
      images: [
        {
          id: imageId
        }
      ],
      tags: tagData
    }

    // Créer le produit avec l'image
    const productResponse = await axios.post(`${baseURLWC}/products`, productData, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`,
        'Content-Type': 'application/json'
      }
    })

    console.log('Produit créé avec succès:', productResponse.data)
  } catch (error) {
    console.error('Erreur lors de la création du produit:', error.response ? error.response.data : error.message)
  }
}

export {
  uploadProductToWooCommerce
}
