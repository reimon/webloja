import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

// configuração do reactotron no redux
const enhancer =
  process.env.NODE_ENV === 'develepment' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
