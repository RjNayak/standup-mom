import dispathcher from '../dispatchers/dispatcher.js';

export function createtask(data){
  dispathcher.dispatch({
    type:"CREATE_TASK",
    data
  })
}

export function deletetask(data){
  dispathcher.dispatch({
    type:"DELETE_TASK",
    data
  })
}
