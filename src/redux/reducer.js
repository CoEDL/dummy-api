const initialState = {
  model: {
    name: "",
    audioFiles: [],
    transcriptionFiles: [],
    additionalWordFiles: [],
    pronunciationDictionary: [],
    settings: {},
    date: null
  },
  transcription: {
    name: null,
    modelName: null,
    results: {},
    audioFiles: [],
    date: null
  },
  response: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_AUDIO_FILES_SUCCESS':
      return { ...state, model: {...state.model, audioFiles:action.data.audioFiles} }

    case 'GET_TRANSCRIPTION_FILES_SUCCESS':
      return { ...state, model: {...state.model, transcriptionFiles:action.data.transcriptionFiles} }

    case 'GET_ADDITIONAL_WORD_FILES_SUCCESS':
      return { ...state, model: {...state.model, additionalWordFiles:action.data.additionalWordFiles} }

    case 'GET_PRONUNCIATION_DICTIONARY_SUCCESS':
      return { ...state, model: {...state.model, pronunciationDictionary:action.data.pronunciationDictionary} }

    case 'GET_SETTINGS_SUCCESS':
      return { ...state, model: {...state.model, settings:action.data.settings} }

    case 'UPDATE_SETTINGS_SUCCESS':
      console.log(action.data.data.status)
      return { ...state, response: action.data.data.status }

    default:
      return state
  }
}





export default rootReducer
