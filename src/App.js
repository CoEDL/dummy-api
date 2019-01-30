import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Container, Message } from 'semantic-ui-react'

import {
  getName,
  getAudioFiles,
  getTranscriptionFiles,
  getAdditionalWordFiles,
  getPronunciationDictionary,
  getSettings,
  updateName,
  updateAudioFiles,
  updateTranscriptionFiles,
  updateAdditionalWordFiles,
  updatePronunciationDictionary,
  updateSettings
} from './redux/actions'

class App extends Component {

  render = () => {
    const {
      name,
      getName,
      audioFiles,
      getAudioFiles,
      transcriptionFiles,
      getTranscriptionFiles,
      additionalWordFiles,
      getAdditionalWordFiles,
      pronunciationDictionary,
      getPronunciationDictionary,
      settings,
      getSettings,
      updateName,
      updateAudioFiles,
      updateTranscriptionFiles,
      updateAdditionalWordFiles,
      updatePronunciationDictionary,
      updateSettings,
      apiResponse
    } = this.props

    return (
      <Container>

        <Message color='teal' size="big">
          <p>API response: <strong>{apiResponse.status}</strong></p>
        </Message>

        <section>
          <Button onClick={getName}>get name</Button>
          {JSON.stringify(name)}
          <br />
          <Button onClick={() => updateName("field recording model")}>update name</Button>
        </section>

        <section>
          <Button onClick={getAudioFiles}>get audio files</Button>
          {JSON.stringify(audioFiles)}
          <br />
          <Button onClick={() => updateAudioFiles("field-recording.wav")}>update audio file</Button>
        </section>

        <section>
          <Button onClick={getTranscriptionFiles}>get transcription files</Button>
          {JSON.stringify(transcriptionFiles)}
          <br />
          <Button onClick={() => updateTranscriptionFiles("field-recording.eaf")}>update transcription file</Button>
        </section>

        <section>
          <Button onClick={getAdditionalWordFiles}>get additional word files</Button>
          {JSON.stringify(additionalWordFiles)}
          <br />
          <Button onClick={() => updateAdditionalWordFiles("additional-word-file.wav")}>update word file</Button>
        </section>

        <section>
          <Button onClick={getPronunciationDictionary}>get pron dict file</Button>
          {JSON.stringify(pronunciationDictionary)}
          <br />
          <Button onClick={() => updatePronunciationDictionary("pron-dict.txt")}>update pron dict</Button>
        </section>

        <section>
          <Button onClick={getSettings}>get settings</Button>
          {JSON.stringify(settings)}
          <br />
          <Button onClick={() => updateSettings({"someSetting": 123})}>update settings</Button>
        </section>

        <p>This app is at <a href="https://github.com/CoEDL/elpis-dummy-api">github.com/CoEDL/elpis-dummy-api</a></p>

      </Container>
    )
  }
}
const mapStateToProps = state => {
  return {
    apiResponse: state.apiResponse,
    name: state.model.name,
    audioFiles: state.model.audioFiles,
    transcriptionFiles: state.model.transcriptionFiles,
    additionalWordFiles: state.model.additionalWordFiles,
    pronunciationDictionary: state.model.pronunciationDictionary,
    settings: state.model.settings
  }
}
const mapDispatchToProps = dispatch => ({
  getName: () => {
    dispatch(getName())
  },
  getAudioFiles: () => {
    dispatch(getAudioFiles())
  },
  getTranscriptionFiles: () => {
    dispatch(getTranscriptionFiles())
  },
  getAdditionalWordFiles: () => {
    dispatch(getAdditionalWordFiles())
  },
  getPronunciationDictionary: () => {
    dispatch(getPronunciationDictionary())
  },
  getSettings: () => {
    dispatch(getSettings())
  },
  updateName: (data) => {
    dispatch(updateName(data))
  },
  updateAudioFiles: (data) => {
    dispatch(updateAudioFiles(data))
  },
  updateTranscriptionFiles: (data) => {
    dispatch(updateTranscriptionFiles(data))
  },
  updateAdditionalWordFiles: (data) => {
    dispatch(updateAdditionalWordFiles(data))
  },
  updatePronunciationDictionary: (data) => {
    dispatch(updatePronunciationDictionary(data))
  },
  updateSettings: (data) => {
    dispatch(updateSettings(data))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
