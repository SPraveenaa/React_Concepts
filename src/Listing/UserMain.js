import { Route, Routes } from 'react-router-dom';
import UserListing from './UserListing';
import UserCreate from './Create/UserCreate';
import UserManage from './Manage/UserManage';

function UserMain() {
	return (
		<Routes>
			<Route path={`/`} element={<UserListing />} />
			<Route path={`/create`} element={<UserCreate />} />
			<Route path={`/manage/:id`} element={<UserManage />} />
		</Routes>
	);
}
export default UserMain;
