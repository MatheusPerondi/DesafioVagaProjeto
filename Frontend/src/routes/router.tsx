import { createBrowserRouter } from 'react-router-dom';
import { UserList } from '../Components/UserList';
import { NewUser } from '../Components/NewUser';import { EditUser } from '../Components/EditUser';
;

const router = (addUser: (newUser: any) => void, updateUser: (updatedUser: any) => void, users: any[]) => createBrowserRouter([
  {
    path: '/',
    element: <UserList user={users} />,  
  },
  {
    path: 'new-user',
    element: <NewUser addUser={addUser} />,  
  },
  {
    path: 'edit-user',
    element: <EditUser updateUser={updateUser} users={users}/>
  }
]);

export default router;