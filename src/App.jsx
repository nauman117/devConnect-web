import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./componenets/Body"
import Login from "./componenets/Login"
import Profile from "./componenets/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./componenets/Feed"

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
