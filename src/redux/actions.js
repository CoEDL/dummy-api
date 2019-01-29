import axios from 'axios'

// app.fakejson.com/q/HItiwsJR?token=YOUR_TOKEN_HERE

const baseUrl = 'https://app.fakejson.com/q/'
const token = '?token=' + process.env.REACT_APP_TOKEN


var Handler={};

Handler.apiSuccessAudioFiles = data => {
  return { type: 'API_SUCCESS_AUDIO_FILES', data }
}

Handler.apiSuccessTranscriptionFiles = data => {
  return { type: 'API_SUCCESS_TRANSCRIPTION_FILES', data }
}


const getApi = (url, somefunc) => {
  return dispatch => {
    axios({
      method: 'get',
      url: url
    }).then(function(resp) {
      dispatch(Handler[somefunc](resp.data))
    })
  }
}


export const apiSuccessAudioFiles = data => {
  return { type: 'API_SUCCESS_AUDIO_FILES', data }
}
export const apiSuccessTranscriptionFiles = data => {
  return { type: 'API_SUCCESS_TRANSCRIPTION_FILES', data }
}
// export const apiSuccessAdditionalWordFiles = data => {
//   return { type: 'API_SUCCESS_ADDITIONAL_WORD_FILES', data }
// }

export const getAudioFiles = () => {
  const url = baseUrl + '7py7QEtL' + token
  return getApi(url, 'apiSuccessAudioFiles')
}
export const getTranscriptionFiles = () => {
  const url = baseUrl + 'HItiwsJR' + token
  return getApi(url, 'apiSuccessTranscriptionFiles')
}
// export const getAdditionalWordFiles = () => {
//   const url = baseUrl + 'HItiwsJR' + token
//   return getApi(url, 'apiSuccessAdditionalWordFiles')
// }

