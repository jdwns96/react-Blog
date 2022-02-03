import { useCallback, useEffect } from "react";
import { css, Theme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/rootReducer";
import { sidebarToggleAction } from "../../../store/global/sidebar/action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";

import Login from "./Login";
import Column from "./Column";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { toggle } = useSelector((store: RootState) => store.sidebar);

  // scroll block when toggle true
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [toggle]);

  const onToggle = useCallback(() => {
    dispatch(sidebarToggleAction());
  }, []);
  const onClose = useCallback(() => {
    dispatch(sidebarToggleAction());
  }, []);

  return (
    <>
      {/* curtain */}
      {toggle && <div css={style.curtain} onClick={onClose}></div>}
      <nav css={toggle ? style.sidebarOn : style.sidebarOff}>
        {/* icon */}
        <div css={style.hamberger} onClick={onToggle}>
          <FontAwesomeIcon icon={faHamburger} />
        </div>
        <div css={style.close} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        {/* icon */}
        <header css={style.sidebarHeader}>logo</header>
        <header css={style.userBox}>
          <Login />
        </header>
        <hr />
        <main css={style.sidebarBody}>
          <Column> HOME</Column>
          <Column> JAVASCRIPT</Column>
        </main>
        <footer css={style.sidebarFooter}></footer>
      </nav>
    </>
  );
}

const sidebarStyle = `
  z-index: 9999;
  position: fixed;
  top: 0;
  right: 0px;
  width: 300px;
  height: 100vh;
  transition: 0.3s;
  background-color: #fcfbf7;
  background-image: radial-gradient(#c9ba9c 0.5px, #fcf8eb 0.5px);
  background-size: 10px 10px;

  display: flex;
  flex-direction: column;
`;

const style = {
  curtain: css`
    z-index: 9999;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    opacity: 0.5;
    background-color: #000000;
    cursor: pointer;
  `,

  sidebarOn: (theme: Theme) => css`
    ${sidebarStyle}
    right: 0px;
    ${theme.media.mobile} {
      width: 100%;
    }
  `,
  sidebarOff: css`
    ${sidebarStyle}
    right: -300px;
  `,
  hamberger: (theme: Theme) => css`
    color: #be861d;
    position: absolute;
    z-index: 9999;
    top: 5px;
    left: -48px;
    width: 48px;
    height: 48px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: #fff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transition: 0.3s;
    &:hover {
      font-size: 2rem;
    }
  `,
  close: (theme: Theme) => css`
    display: none;
    position: absolute;
    z-index: 9999;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    font-size: 2rem;
    ${theme.media.mobile} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  sidebarHeader: css`
    flex-grow: 1;
    flex-shrink: 0;
    width: 100%;
    height: 60px;
    padding: 1rem 1.5rem;
    background-color: #fff;
    border-bottom: 2px solid #be861d;
  `,
  sidebarBody: css`
    padding: 1rem;
    height: 100%;
    overflow: auto;
    margin-bottom: 60px;
  `,
  userBox: css`
    padding: 1rem;
  `,
  sidebarFooter: css`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    border-top: 2px solid #be861d;
    padding: 1rem;
    background-color: #fff;
    height: 60px;
  `,
};
