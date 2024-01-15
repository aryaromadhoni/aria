import React, { useState } from 'react';
import List from './List';
import axios from 'axios';

const Home = () => {
  const [userField, setUserField] = useState({
    name: '',
    email: '',
    password: '',
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('http://127.0.0.1:8000/api/addnew', userField);
      console.log(response);
      setLoading(false);
    } catch (err) {
      console.log('Something Wrong');
      setLoading(false);
    }
  };

  if (loading) {
    return <Home />;
  }

  const labelStyle = {
    color: 'blue', // Ganti warna font sesuai yang diinginkan
  };

  const buttonStyle = {
    backgroundColor: 'green', // Ganti warna latar tombol sesuai yang diinginkan
    color: 'white', // Ganti warna font tombol sesuai yang diinginkan
  };

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <List />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Add Your Detail</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label" style={labelStyle}>
                    Full Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Full Name"
                    name="name"
                    onChange={(e) => changeUserFieldHandler(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style={labelStyle}>
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => changeUserFieldHandler(e)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label" style={labelStyle}>
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    name="password"
                    onChange={(e) => changeUserFieldHandler(e)}
                    required
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" style={buttonStyle} onClick={(e) => onSubmitChange(e)}>
                    {loading ? 'Adding User...' : 'Add User'}
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

export default Home;
