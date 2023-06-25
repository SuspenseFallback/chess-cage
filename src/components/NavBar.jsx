import "../css/components/Navbar.css";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { getSession, signOut } from "../supabase/supabase";

import { Avatar } from "primereact/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SpinnerPage from "./SpinnerPage";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isUserItems, setIsUserItems] = useState(false);
  const [isResponsiveMenu, setResponsiveMenu] = useState(false);

  useEffect(() => {
    getSession((data, error) => {
      if (error) console.log(error);

      if (data.session) {
        setIsLoggedIn(true);
        setSession(data.session);
      } else {
        setIsLoggedIn(false);
        setSession(null);
      }

      setLoading(false);

      console.log(data);
    });
  }, []);

  const signOutHandler = () => {
    signOut((err) => {
      if (err) throw err;

      navigate("/");
    });
  };

  useEffect(() => {
    document.addEventListener("resize", () => {
      if (window.innerWidth > 685) {
        setResponsiveMenu(false);
      }
    });
  }, []);

  const goToLink = (link) => {
    setResponsiveMenu(false);
    navigate(link);
  };

  return loading ? (
    <>
      <SpinnerPage />
    </>
  ) : (
    <>
      <div className="nav">
        <p className="nav-logo">ChessCage</p>
        <div className="nav-items">
          <div
            className={
              !isResponsiveMenu
                ? "nav-item" + (isUserItems ? " hidden" : "")
                : "nav-long-item"
            }
            onClick={() => goToLink("/")}
          >
            <NavLink className={"nav-link"} to="">
              Home
            </NavLink>
          </div>
          <div
            className={
              !isResponsiveMenu
                ? "nav-item" + (isUserItems ? " hidden" : "")
                : "nav-long-item"
            }
            onClick={() => goToLink('play?time="bullet"')}
          >
            <NavLink className={"nav-link"} to="play?time=bullet">
              Play
            </NavLink>
          </div>
          <div
            className={
              !isResponsiveMenu
                ? "nav-item" + (isUserItems ? " hidden" : "")
                : "nav-long-item"
            }
            onClick={() => goToLink("play/ai")}
          >
            <NavLink className={"nav-link"} to="play/ai">
              AI
            </NavLink>
          </div>
          <div
            className={
              !isResponsiveMenu
                ? "nav-item" + (isUserItems ? " hidden" : "")
                : "nav-long-item"
            }
            onClick={() => goToLink("puzzles/trainer")}
          >
            <NavLink className={"nav-link"} to="puzzles/trainer">
              Puzzles
            </NavLink>
          </div>
          <div
            className={
              !isResponsiveMenu
                ? "nav-item" + (isUserItems ? " hidden" : "")
                : "nav-long-item"
            }
            onClick={() => goToLink("lessons")}
          >
            <NavLink className={"nav-link"} to="lessons">
              Lessons
            </NavLink>
          </div>
          <div
            className={
              !isResponsiveMenu
                ? "hidden"
                : "nav-long-item" + (isUserItems ? " clicked" : "")
            }
            onClick={() => setIsUserItems(!isUserItems)}
          >
            {session ? session.user.user_metadata.username : ""}{" "}
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div
            className={
              isResponsiveMenu
                ? "hidden"
                : "nav-item nav-cancel flex align-center justify-center" +
                  (!isUserItems ? " hidden" : "")
            }
            onClick={() => setIsUserItems(false)}
          >
            <span>&times;</span>
          </div>
          <>
            <div
              className={
                (!isResponsiveMenu ? "nav-item" : "nav-long-item") +
                (!isUserItems ? " hidden" : "")
              }
            >
              <NavLink
                className={
                  "nav-link" + (isResponsiveMenu ? " nav-user-link" : "")
                }
                to="lessons"
              >
                Profile
              </NavLink>
            </div>
            <div
              className={
                (!isResponsiveMenu ? "nav-item" : "nav-long-item") +
                (!isUserItems ? " hidden" : "")
              }
            >
              <NavLink
                className={
                  "nav-link" + (isResponsiveMenu ? " nav-user-link" : "")
                }
                to="lessons"
              >
                Friends
              </NavLink>
            </div>
            <div
              className={
                (!isResponsiveMenu ? "nav-item" : "nav-long-item") +
                (!isUserItems ? " hidden" : "")
              }
            >
              <NavLink
                className={
                  "nav-link" + (isResponsiveMenu ? " nav-user-link" : "")
                }
                to="lessons"
              >
                Stats
              </NavLink>
            </div>
            <div
              className={
                (!isResponsiveMenu ? "nav-item" : " nav-long-item") +
                (!isUserItems ? " hidden" : "")
              }
            >
              <NavLink
                className={
                  "nav-link" + (isResponsiveMenu ? " nav-user-link" : "")
                }
                to="lessons"
              >
                Settings
              </NavLink>
            </div>
          </>
          {!isLoggedIn ? (
            <>
              <div className="nav-item nav-button">
                {" "}
                <NavLink className="nav-link" to="signup">
                  Sign up
                </NavLink>
              </div>
              <div className="nav-item nav-button">
                {" "}
                <NavLink className="nav-link" to="login">
                  Log in
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div
                className={"nav-item nav-account"}
                onClick={() => setIsUserItems(!isUserItems)}
              >
                <Avatar icon="pi pi-user" shape="circle" />
              </div>
              <div className={"nav-item danger last"} onClick={signOutHandler}>
                Log out
              </div>
            </>
          )}
          <div
            className="nav-item nav-menu"
            onClick={() => setResponsiveMenu(!isResponsiveMenu)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <div className={"body-wrapper" + (isResponsiveMenu ? "overlay" : "")}>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
