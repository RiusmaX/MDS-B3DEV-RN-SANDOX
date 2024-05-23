import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.clarifai.com/v2',
  headers: {
    Authorization: 'Key ',
    'Content-Type': 'application/json'
  }
})

const identifyImage = async (imageBase64) => {
  try {
    const res = await api.post('/users/clarifai/apps/main/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs', {
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
    console.log(JSON.stringify(res.data, null, 2))
    return res
  } catch (error) {
    console.log(error)
  }
}

export {
  identifyImage
}
