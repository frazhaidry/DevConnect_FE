
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
import LockedPage from "./components/Landing/LockedPage"
import Quiz from "./components/features/Quiz/Quiz"
import Dsa_Sheet_Home from "./components/features/DSA_Sheet/Dsa_Sheet_Home"
import Resources from "./components/features/Resource/Resources"
import InterviewQuestions from "./components/features/Resource/InterviewQuestions"
import CoverLetterGuide from "./components/features/Resource/CoverLetterGuide"
import Cn_question from "./components/features/Resource/Cn_question"
import Os_question from "./components/features/Resource/Os_question"
import Dbms_question from "./components/features/Resource/Dbms_question"
import Oops from "./components/features/Resource/Oops"
import MockInterview from "./components/features/MockInterview/MockInterview"
import Compiler_Ques from "./components/features/Resource/Compiler_Ques"
import VerifyOtp from "./components/features/Auth/VerifyOtp"





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
            <Route path="/verify-otp" element={<VerifyOtp/>} />
             <Route path="/locked" element={<LockedPage />} /> 

            {/* Public Blog Routes */}
            <Route path="/blogs" element={<Blogs />}>
              <Route index element={<BlogList />} />
              <Route path=":id" element={<BlogDetails />} />
              
            </Route>

            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/resources/interview-questions" element={<InterviewQuestions />} />
            <Route path="/resources/cover-letter" element={<CoverLetterGuide />} />
            <Route path="/resources/cs/cn" element={<Cn_question />} />
            <Route path="/resources/cs/os" element={<Os_question/>}/>
            <Route path="/resources/cs/dbms" element={<Dbms_question/>}/>
            <Route path="/resources/cs/oops" element={<Oops/>}/>
            <Route path="/resources/cs/compiler" element={<Compiler_Ques/>} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/dsa-sheet" element={<Dsa_Sheet_Home />} />

            {/* Protected Routes */}
            <Route element={<ProtectedLayout />}>
            <Route path="/feed" element={<Feed />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="connections" element={<Connection />} />
              <Route path="requests" element={<Request />} />
              <Route path="/mock-interviews" element={<MockInterview/>}/>
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
