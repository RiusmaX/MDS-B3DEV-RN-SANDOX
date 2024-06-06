import axios from 'axios'

const api = axios.create({
  baseURL: process.env.CLARIFAI_API_URL,
  headers: {
    Authorization: `Key ${process.env.CLARIFAI_API_KEY}`,
    'Content-Type': 'application/json'
  }
})

const identifyImage = async (imageBase64) => {
  try {
    const res = await api.post('/users/clarifai/apps/main/models/general-image-detection/versions/1580bb1932594c93b7e2e04456af7c6f/outputs', {
      inputs: [
        {
          data: {
            image: {
              base64: imageBase64
            }
          }
        }
      ]
    })
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export {
  identifyImage
}
