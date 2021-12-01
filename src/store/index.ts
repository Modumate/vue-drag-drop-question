import { createStore, Store } from "vuex";

export type State = {
  fruit: string[];
};

// Feel free to edit the state as you see fit
export default createStore({
  state: {
    fruit: [
      "Coconut",
      "Apple",
      "Banana",
      "Cranberry",
      "Lime",
      "Lemon",
      "Mango",
    ],
  } as State,
  mutations: {},
  actions: {},
  modules: {},
});

/**
 * Declare store data type
 */
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
