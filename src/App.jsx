
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Body from "./components/Layout/Body"

import Profile from "./components/features/Profile/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/features/Feed/Feed"
import Connection from "./components/features/Connection/Connection"
import Request from "./components/features/Request/Request"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



// Import Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CancellationRefund from "./pages/CancellationRefund";
import ShippingDelivery from "./pages/ShippingDelivery";
import ContactUs from "./pages/ContactUs";

import Chat from "./components/features/Chat/Chat"
import Login from "./components/features/Auth/Login"
import Home from "./components/Landing/Home"
import Blogs from "./components/features/Blogs/Blogs"
import BlogList from "./components/features/Blogs/BlogList"
import BlogCreate from "./components/features/Blogs/BlogCreate"
import BlogDetails from "./components/features/Blogs/BlogDetails"
import BlogEdit from "./components/features/Blogs/BlogEdit"



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

    {/* Blog Routes */}
    <Route path="/blogs" element={<Blogs />}>
      <Route index element={<BlogList />} />
      <Route path="create" element={<BlogCreate />} />
      <Route path=":id" element={<BlogDetails />} />
      <Route path=":id/edit" element={<BlogEdit />} />
    </Route>
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
