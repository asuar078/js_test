import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'underscore'

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get('/posts')

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  }
}

export const fetchUser = id => (dispatch, getState) => {
  _fetchUser(id, dispatch)
}

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
})
