import React from "react";
import { Link } from "react-router-dom";
import signinimg from "../images/signin.png"
function SignIn() {
  return (
    <>
      <div class="columns">
        <div class="column is-half is-0.75rem">
          <section class="hero is-fullheight">
            <div class="hero-head">
              <div class="is-flex is-justify-content-flex-start">
                <Link
                  class="has-text-link-dark is-family-monospace mt-3 ml-3 mr-3 is-link"
                  to="/"
                >
                  Home
                </Link>
              </div>
              <div class="is-flex is-justify-content-center">
                <div class="title is-link is-size-3 is-italic has-text-link-dark is-family-monospace">
                  React Bulma
                  <br />
                </div>
              </div>
            </div>
            <div class="hero-body">
              <Link class="image" to="/">
                <img src={signinimg} alt="" />
              </Link>
            </div>
          </section>
        </div>
        <div class="column is-half ">
          <div class="hero is-fullheight is-white">
            <div class="hero-head">
              <div class="is-flex mt-3 mr-3 is-justify-content-flex-end">
                <h1 class="text is-size-6 pr-2 is-italic has-text-link-dark is-family-monospace">
                  Need an account?
                </h1>
                <Link
                  class="button is-small mr-3 is-rounded is-link is-family-monospace"
                  to="/signup"
                >
                  Sign up
                </Link>
              </div>
            </div>
            <div class="hero-body is-flex is-flex-direction-column is-align-items-stretch">
              <div class="is-flex is-justify-content-center is-align-items-center">
                <h1 class="title is-size-3 mb-6 is-italic has-text-link-dark is-family-monospace">
                  Sign in with email or username
                </h1>
              </div>
              <form class="box ">
                <div class="field">
                  <label class="label has-text-link-dark is-italic is-family-monospace">
                    Username or Email
                  </label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="e.g. user09"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label has-text-link-dark is-italic is-family-monospace">
                    Password
                  </label>
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                </div>
                <button class="button is-link is-rounded">
                  <span class="is-family-monospace">Sign In</span>
                </button>{" "}
                <span class="is-flex is-justify-content-flex-end">
                  <Link
                    class="has-text-link-dark is-family-monospace"
                    to="/recoverpassword"
                  >
                    Forgot Password
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
