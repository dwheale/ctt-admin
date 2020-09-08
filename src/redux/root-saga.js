import { all, call } from 'redux-saga/effects'

import { userSagas } from './user/user.sagas.js'

export default function* rootSaga() {
  yield all([
      // generators to call
      call(userSagas)
  ])
}