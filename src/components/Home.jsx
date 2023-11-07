import React from "react";
import { Link } from "react-router-dom";
// import SignIn from "./SignIn";
import googlesignin from "../images/googlesignin.png";
import microsoftsignin from "../images/microsoftsignin.png";
import emailsignin from "../images/emailsignin.png";
import homepageimg from "../images/cnixontech.png";
function Home() {
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
                <img src={homepageimg} alt="" />
              </Link>
            </div>
          </section>
        </div>
        <div class="column is-half ">
          <div class="hero is-fullheight is-white">
            <div class="hero-head">
              <div class="is-flex mt-3 ml-3 is-justify-content-flex-end">
                <h1 class="text is-size-6 pr-2 is-italic has-text-link-dark">
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
            <div class="hero-body is-flex is-flex-direction-column is-justify-content-center">
              <div class="is-flex is-justify-content-center is-align-items-center">
                <h1 class="title is-size-3 mb-6 is-italic has-text-link-dark is-family-monospace">
                  Sign up
                </h1>
              </div>
              <div class="box is-flex is-flex-direction-column is-align-items-center">
                <button class="block button is-rounded is-responsive is-fullwidth is-danger is-outlined mb-3">
                  <span class="image is-24x24">
                    <img src={googlesignin} alt="" />
                  </span>
                  <span> Sign up with Google</span>
                </button>
                <button class="block button block is-rounded is-responsive is-fullwidth is-info is-outlined mb-3">
                  <span class="image is-24x24 icon-text ">
                    <img src={microsoftsignin} alt="" />
                  </span>
                  <span> Sign up with Microsoft</span>
                </button>
                <Link
                  class="block button is-rounded is-responsive is-fullwidth is-outlined"
                  to="/signup"
                >
                  <span class="icon-text">
                    <span class="icon">
                      <img src={emailsignin} />
                    </span>
                    <span>Sign up with Email</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
