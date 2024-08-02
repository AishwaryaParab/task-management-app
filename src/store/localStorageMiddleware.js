export const localStorageMiddleware = (storeAPI) => (next) => (action) => {
    const result = next(action);
    const state = storeAPI.getState();
    localStorage.setItem('tasks', JSON.stringify(state.tasks.tasks));
    return result;
}