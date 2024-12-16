import { useState } from 'react'
import { UserList } from './Components/UserList'
import { NewUser } from './Components/NewUser'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'

interface User {
  name: string;
  userName: string;
  email: string;
  isActive: boolean;
}


function App() {
  const [users, setUsers] = useState<User[]>([])
  
  function addUser(newUser: any){
    setUsers((prevUsers) => [...prevUsers, newUser])
  }

  function updateUser(updatedUser: User) {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.userName === updatedUser.userName ? updatedUser : user
      )
    );
  }

  return (
    <RouterProvider router={router(addUser, updateUser, users)} />
  )
}

export default App
