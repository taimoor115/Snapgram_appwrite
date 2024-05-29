import AuthLayout from "./_auth/AuthLayout";
import Signin from "./_auth/forms/Signin";
import Signup from "./_auth/forms/Signup";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./global.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<Signin />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
        {/* Private Routs */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
