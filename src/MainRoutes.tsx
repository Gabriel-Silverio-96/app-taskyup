import Page404 from "modules/error/Page404";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "shared/components/Loading/Loading";
import RequiredAuth from "shared/components/RequiredAuth";

const SignIn = lazy(() => import("modules/auth/SignIn"));
const SignUp = lazy(() => import("modules/auth/SignUp"));
const ForgotPassword = lazy(() => import("modules/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("modules/auth/ResetPassword"));

const Profile = lazy(() => import("modules/account/Profile"));

const Board = lazy(() => import("modules/dashboard/Board"));
const Note = lazy(() => import("modules/notes/Note"));
const NoteEdit = lazy(() => import("modules/notes/NoteEdit"));

const Text = lazy(() => import("modules/texts/Text"));
const TextEdit = lazy(() => import("modules/texts/TextEdit"));
const PublicText = lazy(() => import("modules/texts/PublicText"));

const MainRoutes: React.FC = () => {
	return (
		<Suspense fallback={<Loading isLoading backdrop />}>
			<Routes>
				<Route path="/" element={<Navigate replace to="/auth/signin" />} />
				<Route path="/auth/signin" element={<SignIn />} />
				<Route path="/auth/signup" element={<SignUp />} />
				<Route path="/auth/forgot-password" element={<ForgotPassword />} />
				<Route path="/auth/reset-password/:token" element={<ResetPassword />} />

				<Route path="/profile" element={<RequiredAuth><Profile /></RequiredAuth>} />

				<Route path="/dashboard" element={<RequiredAuth><Board /></RequiredAuth>} />
				<Route path="/notes/:board_id" element={<RequiredAuth><Note /></RequiredAuth>} />		
				<Route path="/note/edit" element={<RequiredAuth><NoteEdit /></RequiredAuth>} />	
				
				<Route path="/texts/:board_id" element={<RequiredAuth><Text /></RequiredAuth>} />				
				<Route path="/text/edit" element={<RequiredAuth drawer={false}><TextEdit /></RequiredAuth>} />				
				<Route path="public/text" element={<PublicText />} />				

				<Route path="*" element={<Page404 />} />
			</Routes>
		</Suspense>
	);
};

export default MainRoutes;
