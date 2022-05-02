import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AddItem from "./components/AddItem/AddItem";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import ManageInventorie from "./components/ManageInventorie/ManageInventorie";
import MyItems from "./components/MyItems/MyItems";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Singup from "./components/Singup/Singup";

// set context auth user
export const UserAuth = createContext();

function App() {
	const [loginUser, setLoginUser] = useState({});
	return (
		<>
			<UserAuth.Provider value={[loginUser, setLoginUser]}>
				<Navbar />
				<Toaster />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route
						path='/addItem'
						element={
							<RequireAuth>
								<AddItem />
							</RequireAuth>
						}
					/>
					<Route
						path='/myItem'
						element={
							<RequireAuth>
								<MyItems />
							</RequireAuth>
						}
					/>
					<Route
						path='/inventory/:id'
						element={
							<RequireAuth>
								<Inventory />
							</RequireAuth>
						}
					/>
					<Route
						path='/manageInventorie'
						element={
							<RequireAuth>
								<ManageInventorie />
							</RequireAuth>
						}
					/>
					<Route path='/login' element={<Login />} />
					<Route path='/singup' element={<Singup />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</UserAuth.Provider>
		</>
	);
}

export default App;
