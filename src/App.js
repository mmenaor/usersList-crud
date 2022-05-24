import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [isFormShowed, setIsFormShowed] = useState(false);

  useEffect(() =>{
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  }

  const deleteUser = userId => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${userId}/`)
      .then(() => getUsers())
      .catch(err => console.log(err.response));
  };

  const selectUser = user => {
    setUserSelected(user);
    showForm();
  }

  const editUser = user => {
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
      .then(() => getUsers())
      .catch(err => console.log(err.response));
  }

  const hideForm = () => {
    setIsFormShowed(false);
    setUserSelected(null);
  }

  const showForm = () => {
    setIsFormShowed(true);
  }

  const addUser = user => {
    axios.post('https://users-crud1.herokuapp.com/users/', user)
      .then(() => getUsers())
      .then(() => hideForm())
      .catch(err => console.log(err.response));
  }

  return (
    <div className="App">
      {isFormShowed && <UsersForm hideForm={hideForm} addUser={addUser} userSelected={userSelected} editUser={editUser} />}
      <UsersList users={users} deleteUser={deleteUser} selectUser={selectUser} showForm={showForm} />
    </div>
  );
}

export default App;
