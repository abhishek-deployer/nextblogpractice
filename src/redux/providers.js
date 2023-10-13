//provider.js
"use client";
import { Provider } from "react-redux";
import { store } from "./store";

// export default function Providers({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }
const Providers = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providers