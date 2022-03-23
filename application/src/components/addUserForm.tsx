import React, { useState } from "react";
import { IBaseUser } from "./interface";

interface IProps {
  onAddUser: (user: IBaseUser) => void;
}
const initUser = { email: "", name: "", age: "" };
const AddUserForm: React.FunctionComponent<IProps> = props => {
  const [formValue, setFormValue] = useState(initUser);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rules = [
      { key: "name", required: true, label: "Name" },
      { key: "email", required: true, label: "E-mail" },
    ];
    
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="user-form">
      <h1>add users</h1>
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            placeholder="please input name"
            name="name"
            value={formValue.name}
            onChange={onInputChange}
          />
          
        </div>
        <div className="form-row">
          <label>E-mail</label>
          <input
            type="text"
            placeholder="please input e-mail"
            name="email"
            value={formValue.email}
            onChange={onInputChange}
          />
        </div>
    
        <div className="form-row">
          <button>Add new user</button>
        </div>
      </form>
    </div>
  );
};
export default AddUserForm;
