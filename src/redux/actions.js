import axios from 'axios'

// app.fakejson.com/q/HItiwsJR?token=YOUR_TOKEN_HERE

const baseUrl = 'https://app.fakejson.com/q/'
const token = '?token=' + process.env.REACT_APP_TOKEN


const getApi = (url) => {
  return dispatch => {
    axios({
      method: 'get',
      url: url
    }).then(function(resp) {
      dispatch(apiSuccessTranscriptionFiles(resp.data))
    })
  }
}


export const apiSuccessAudioFiles = data => {
  return { type: 'API_SUCCESS_AUDIO_FILES', data }
}
export const getAudioFiles = () => {
  const url = baseUrl + '7py7QEtL' + token
  return getApi(url)
}

export const apiSuccessTranscriptionFiles = data => {
  return { type: 'API_SUCCESS_TRANSCRIPTION_FILES', data }
}
export const getTranscriptionFiles = () => {
  const url = baseUrl + 'HItiwsJR' + token
  return getApi(url)
}

