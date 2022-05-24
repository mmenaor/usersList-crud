import React, {useEffect, useRef, useState} from 'react';

const UsersForm = ({hideForm, addUser, userSelected, editUser}) => {
    const ref = useRef();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => {
        if(userSelected !== null){
            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        } else{
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setBirthday("");
        }
    },[userSelected]);

    const submit = e => {
        e.preventDefault();
        const user = {
            first_name,
            last_name,
            email,
            password,
            birthday
        }
        if(userSelected === null){
            addUser(user);
        } else {
            editUser(user);
        }
        hideForm();
    }

    return (
        <div className="full-form-container">
            <form onSubmit={submit} className="form-container">
                {userSelected === null ? <h2>New user</h2> : <h2>Edit user</h2>}
                <span onClick={() => hideForm()} className="form-close">x</span>
                <h3>Name</h3>
                <input type="text" className="input-box" placeholder='Add your name' value={first_name} onChange={res => setFirstName(res.target.value)}/>
                <h3>Last name</h3>
                <input type="text" className="input-box" placeholder='Add your last name' value={last_name} onChange={res => setLastName(res.target.value)}/>
                <h3>Email</h3>
                <input type="email" className="input-box" placeholder='Add your email' value={email} onChange={res => setEmail(res.target.value)}/>
                <h3>Password</h3>
                <input type="password" className="input-box" placeholder='Password' value={password} onChange={res => setPassword(res.target.value)}/>
                <h3>Birthday</h3>
                <input type="text" ref={ref} className="input-box" placeholder='DD/MM/AAAA' value={birthday} onChange={res => setBirthday(res.target.value)} onFocus={() => (ref.current.type = "date")} onBlur={e => (!e.target.value && (ref.current.type="text"))}/>
                <button className="btn-add-user">{userSelected === null ? "Add new user" : "Save changes"}</button>
            </form>
            {/* <div className="form-overlay">
            </div> */}
        </div>
    );
};

export default UsersForm;