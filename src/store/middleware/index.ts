

import { ActionTypes } from 'store/actions'
import { persistState, retrievePersistedState } from 'utils'

export const persistFileData = store => next => action => {

  // if(action.type !== ActionTypes.RECEIVE_FILE_DATA){
  //   return next(action)
  // }

  const persistedFileData = retrievePersistedState('files')
  // const { raw: { document } } = action.payload.data
  let currentFile = store.getState().appState.currentFile
  let fileData = []

  let data ={
    title: action.payload.data.raw.document.title,
    html: action.payload.data.raw.document.html,
    formattedTables: action.payload.data.formattedTables,
    raw: action.payload.data.raw
  }

  currentFile.data = data
  currentFile.ingested = true

  //if no persisted data found, create a new list
  if(!persistedFileData){
    fileData.push(currentFile)
  }
  else {
    fileData = JSON.parse(persistedFileData)

    //if the persisted data does not contain the
    //ingested file, just push to the file data
    if(fileData.findIndex(file => file.id === currentFile.id) === -1){
      fileData.push(currentFile)
    }
    //if the ingested file is in the persisted file data
    //just update the file in place
    else {
      const fileIndex = fileData.findIndex(file => file.name === currentFile.name)
      fileData.splice(fileIndex, 1, currentFile)
    }
  }

  return persistState('files', fileData)
    .then(() => next(action)
  )
}