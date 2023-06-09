import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { Avatar } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/UserSlice/userslice";
const Navbar = () => {
  const authuser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

  const handleLogout = () => {
    dispatch(logout());
  };



 
  
  return (
    <div>
      <nav class="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a
              class="navbar-brand mt-2 mt-lg-0"
              href={!isAdmin && token && "/"}
            >
              <p>
                <b>STB</b>
              </p>
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
              
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Accueil
                    </a>
                  </li>
                  {/* {user.authfor && ( */}
                    <li class="nav-item">
                      <a class="nav-link" href="/form1">
                        Obtenir un Prêt
                      </a>
                    </li>
                  {/* )} */}
                
              
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <Avatar
                  className="avatar"
                  size="md"
                  cursor="pointer"
                  name={authuser?.username}
                  src={""}
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                {!token ? (
                  <>
                    <li>
                      <a className="dropdown-item" href="/login">
                        <i className="fa fa-sign-in" aria-hidden="true" />
                        &nbsp; Login
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="/register">
                        <i className="fa fa-user-plus" aria-hidden="true" />
                        &nbsp; Registre
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    
                      <li>
                        <a className="dropdown-item" href="/dashboard">
                          <i className="fa fa-tachometer" aria-hidden="true" />
                          &nbsp; Dashboard
                        </a>
                      </li>
                    
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={handleLogout}
                        href="/"
                      >
                        <i className="fa fa-sign-out" aria-hidden="true" />
                        &nbsp; Logout
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
