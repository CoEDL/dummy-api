import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTranscriptionFiles } from './redux/actions'

class App extends Component {
  fooHandler = () => {
    const { changeFoo } = this.props
    changeFoo('thud')
  }

  incrementHandler = () => {
    const { incrementSomething } = this.props
    incrementSomething()
  }

  inputHandler = event => {
    const { updateMyName } = this.props
    updateMyName(event.target.value)
  }

  getTranscriptionFilesHandler = () => {
    const { getTranscriptionFiles } = this.props
    getTranscriptionFiles()
  }

  render = () => {
    const {name, transcriptionFiles} = this.props
    return (
      <div>
        <section>
        {name}
          <button onClick={this.getTranscriptionFilesHandler}>get transcription files</button>
          {JSON.stringify(transcriptionFiles)}
        </section>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    name: state.model.name,
    transcriptionFiles: state.model.transcriptionFiles
  }
}
const mapDispatchToProps = dispatch => ({
  getTranscriptionFiles: () => {
    dispatch(getTranscriptionFiles())
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
