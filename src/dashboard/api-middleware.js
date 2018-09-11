class ErrorWithCode extends Error {
    constructor(code = null, ...params) {
        super(...params)
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, ErrorWithCode)
        }
        this.code = code
      }
}

function networkCheck(response) {
    if (response.ok) return response
    throw new ErrorWithCode(response.status, response.statusText)
}

const callApi = (uri, data, option) =>
    fetch(uri, Object.assign({}, option, { body: JSON.stringify(data) }))
        .then(networkCheck)
        .then(response => {
            switch (option.dataType) {
                case 'json':
                default:
                    return response.json()
            }
        })

export default ({ endpoint, ...options }) => state => next => action => {
    const callAPI = action.API
    if (typeof callAPI === 'undefined') return next(action)

    const { key, path, data, option } = callAPI
    const actionWith = data => {
        const finalAction = Object.assign({}, action, data)
        delete finalAction.API
        return finalAction
    }

    next(actionWith({ type: 'FETCH_START', [`@api/${key}`]: { status: 'fetching' } }))

    return callApi(
        `${endpoint || process.env.REACT_APP_API_ENDPOINT}/${path}`,
        data,
        { ...options, ...option }
    ).then(response => next(actionWith({
        [`@api/${key}`]: {
            status: 'done',
            data: response
        },
        type: 'FETCH_SUCCESS'
    }))).catch(error => next(actionWith({
        type: 'FETCH_FAILURE',
        [`@api/${key}`]: {
            status: 'error',
            message: error.message || 'unknow error',
            code: error.code
        }
    })))
}