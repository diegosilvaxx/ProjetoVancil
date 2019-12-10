import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function create(reducers, middlewares) {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewares, thunk)
        )
      : applyMiddleware(...middlewares, thunk);

  return createStore(reducers, enhancer);
}

export default create;
