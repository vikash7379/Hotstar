import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider  } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/users/userSlice";



const Nav = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background-color: #040714;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: 700px) {
    padding: 0 0.5rem;
  }
`;
const Logo = styled.div`
  width: 6rem;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
const MenuItems = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-left: 25px;
  margin-right: auto;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 12px;
    cursor: pointer;
    text-transform: uppercase;

    img {
      width: 22px;
      cursor: pointer;
    }
    span {
      color: rgb(249, 249, 249);
      margin-left: 7px;
      letter-spacing: 1.5px;
      position: relative;
      white-space: nowrap;

      &::after {
        content: "";
        width: 0%;
        height: 2px;
        background-color: white;
        opacity: 0.8;
        position: absolute;
        left: 0;
        bottom: -25%;
        transition: width 0.25s ease;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const LoginBtn = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: transparent;
  letter-spacing: 1.5px;
  color: white;
  border: 2px solid;
  transition: 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
const Dropdown =styled.div`
  position: absolute;
  width: 6rem;
  top: 48px;
  border: 1px solid ;
  border-radius: 5px;
  padding:5px 15px;
  right: -25px;
  opacity: 0;
  cursor: pointer;
  background-color: #040714;
  transition: all 0.3s ease;

  &:hover{
    background-color: #FF1E1E;
    box-shadow: rgba(100, 100, 111, 0.4) 0px 1px 39px 0px;
    border: 1px solid #FF1E1E;
  }
`
const SignOut = styled.div`
  position: relative;

  &:hover{
    ${Dropdown} {
      opacity: 1;
      transition-duration:2s;
    }
  }
`

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);


  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("./home");
      }
    });
  },[userName]);


  const handleAuth = () => {

    if (!userName){
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
    }else if (userName) {
      auth
        .signOut()
        .then(()=> {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error)=>alert(error.message));
      }

  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };


  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" alt="logo" />
      </Logo>

      {!userName ? (
        <LoginBtn onClick={handleAuth}>LOGIN</LoginBtn>
      ) : (
        <>
          <MenuItems>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="home" />
              <span>Search</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="home" />
              <span>watchlist</span>
            </a>
            <a href="/originals">
              <img src="/images/original-icon.svg" alt="home" />
              <span>originals</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="home" />
              <span>Movies</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="home" />
              <span>series</span>
            </a>
          </MenuItems>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <Dropdown>
              <span onClick={handleAuth}>Sign out</span>
            </Dropdown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;
