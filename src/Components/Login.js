import React, { useState, useContext } from 'react';
import { db } from '../index';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {useAuth} from './Auth'

const Login = () => {

  const {login} = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log("handle login called!!!")
        const result = await db.collection('users');
        console.log(result)
        const fieldName = 'PhoneNumber'; // Replace with your field name
        const fieldValue = phoneNumber; // Replace with your field value
        const query = result.where(fieldName, '==', fieldValue);
        query.get().then((querySnapshot) => {
          console.log("calling firebase")
          querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            if (doc.data() && doc.data().Role) {
              login(doc.data())
              console.log('Logged in as:', doc.data().Role);
            } else {
              console.log('User not found or role not specified');
            }
          });
        }).catch((error) => {
          console.log('Error getting documents:', error);
        })
        
      } catch (error) {
        console.error('Login failed:', error);
      }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">Login</h3>
            </div>
            <div className="card-body">
              <form className="form" role="form" autoComplete="off">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-success btn-lg float-right"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
