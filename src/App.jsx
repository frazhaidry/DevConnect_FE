
import { BrowserRouter, Routes, Route} from "react-router-dom"
// import Body from "./components/Layout/Body"

// import Profile from "./components/features/Profile/Profile"
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
import ProtectedLayout from "./components/Layout/ProtectedLayout"
// import PublicLayout from "./components/Layout/PublicLayout"
import AppLayout from "./components/Layout/AppLayout"
import SignUp from "./components/features/Auth/SignUp"
import ProfilePage from "./components/features/Profile/ProfilePage"





function App() {


  return (
    <>
    <ToastContainer position="top-center" />
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>

          {/* All routes with Navbar & Footer */}
          <Route element={<AppLayout />}>

            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Public Blog Routes */}
            <Route path="/blogs" element={<Blogs />}>
              <Route index element={<BlogList />} />
              <Route path=":id" element={<BlogDetails />} />
              
            </Route>

            {/* Protected Routes */}
            <Route element={<ProtectedLayout />}>
            <Route path="/feed" element={<Feed />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="connections" element={<Connection />} />
              <Route path="requests" element={<Request />} />
              <Route path="chat/:targetUserId" element={<Chat />} />
              <Route path="blogs/create" element={<BlogCreate />} />
              <Route path="blogs/:id/edit" element={<BlogEdit />} />
            </Route>

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/cancellation-refund" element={<CancellationRefund />} />
            <Route path="/shipping-delivery" element={<ShippingDelivery />} />
            <Route path="/contact-us" element={<ContactUs />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
  )
}

export default App
