import React from 'react';

const UsersList = ({users, deleteUser, selectUser, showForm}) => {
    return (
        <div className="main-container">
            <h1>Users</h1>
            <button onClick={() => showForm()} className="btn-new-user"><span>+</span> Create new user</button>
            <div className="users-list-container">
                {
                    users.map(user => (
                        <div key={user.id} className="user-container">
                            <h2>{user.first_name} {user.last_name}</h2>
                            <hr />
                            <h3>EMAIL</h3>
                            <p>{user.email}</p>
                            <h3>BIRTHDAY</h3>
                            <i className="fa-solid fa-gift"></i><p className="date-birth">{user.birthday}</p>
                            <hr />
                            <div className="btns-container">
                                <i onClick={() => deleteUser(user.id)} className="fa-solid fa-trash-can"></i>
                                <i onClick={() => selectUser(user)} className="fa-solid fa-pen"></i>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UsersList;