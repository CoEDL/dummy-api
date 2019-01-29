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
  apiData: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'API_SUCCESS_AUDIO_FILES':
      return { ...state, model: {...state.model, audioFiles:action.data.audioFiles} }

    case 'API_SUCCESS_TRANSCRIPTION_FILES':
      return { ...state, model: {...state.model, transcriptionFiles:action.data.transcriptionFiles} }

    case 'API_SUCCESS_ADDITIONAL_WORD_FILES':
      return { ...state, model: {...state.model, transcriptionFiles:action.data.transcriptionFiles} }

    default:
      return state
  }
}





export default rootReducer
