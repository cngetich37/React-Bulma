import React from "react";
import { Link } from "react-router-dom";
import signupimg from '../images/cnixontech.png'
function SignUp() {
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
                <img src={signupimg} alt="" />
              </Link>
            </div>
          </section>
        </div>
        <div class="column is-half ">
          <div class="hero is-fullheight is-white">
            <div class="hero-head">
              <div class="is-flex mt-3 mr-3 is-justify-content-flex-end">
                <h1 class="text is-size-6 pr-2 is-italic has-text-link-dark is-family-monospace">
                  Already have an account?
                </h1>
                <Link
                  class="button is-small mr-3 is-rounded is-link"
                  to="/signin"
                >
                  Sign in
                </Link>
              </div>
            </div>
            <div class="hero-body is-flex is-flex-direction-column is-align-items-stretch">
              <div class="is-flex is-justify-content-center is-align-items-center">
                <h1 class="title is-size-3 mb-6 is-italic has-text-link-dark is-family-monospace">
                  Sign up with email
                </h1>
              </div>
              <form class="box">
                <div class="field">
                  <label class="label has-text-link-dark is-italic is-family-monospace">
                    Username
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
                    Email
                  </label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="e.g. collo@example.com"
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
                <div class="field">
                  <label class="label has-text-link-dark is-italic is-family-monospace">
                    Repeat Password
                  </label>
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                </div>

                <button class="button is-link is-rounded is-family-monospace">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
