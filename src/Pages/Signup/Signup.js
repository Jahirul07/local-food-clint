import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const handleSignup= event => {
        event.preventDefault()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex w-11/12 mx-auto">
        <div className="text-center lg:text-left w-6/12">
          <h1 className="text-5xl font-bold">Please Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <p className="text-center">You have an account?<Link to='/login'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Signup;