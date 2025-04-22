
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Connection from "./components/Connection"
import Request from "./components/Request"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



// Import Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CancellationRefund from "./pages/CancellationRefund";
import ShippingDelivery from "./pages/ShippingDelivery";
import ContactUs from "./pages/ContactUs";
import Home from "./components/LandingPage/Home"
import Chat from "./components/Chat"

function App() {


  return (
    <>
     <ToastContainer position="top-center" />
  <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<Home />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Main App Structure */}
          <Route element={<Body />}>
            <Route path="feed" element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connection />} />
            <Route path="requests" element={<Request />} />
            <Route path="/chat/:targetUserId" element={<Chat />} />
          </Route>

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cancellation-refund" element={<CancellationRefund />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
