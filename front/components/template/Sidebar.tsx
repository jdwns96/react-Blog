import { useCallback } from "react";
import { css, Theme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/rootReducer";
import { sidebarToggleAction } from "../../store/global/sidebar/action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { toggle } = useSelector((store: RootState) => store.sidebar);

  const onToggle = useCallback(() => {
    dispatch(sidebarToggleAction());
  }, []);
  const onClose = useCallback(() => {
    dispatch(sidebarToggleAction());
  }, []);

  return (
    <>
      <nav css={toggle ? style.sidebarOn : style.sidebarOff}>
        <div css={style.hamberger} onClick={onToggle}>
          <FontAwesomeIcon icon={faHamburger} />
        </div>
        <div css={style.close} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div css={style.sidebarLogo}>logo</div>
        <div>
          <div className="p-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">로그인</button>
          </div>
          <div className="p-6 h-">
            <ul>
              <li>javascript</li>
              <li>react</li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

const sidebarStyle = `
  z-index: 9999;
  position: absolute;
  top: 0;
  right: 0px;
  width: 300px;
  height: 100vh;
  transition: 0.3s;
  // border-left: 1px solid black;
  background-color: #eee;
`;

const style = {
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
    /* color: #fff; */
    position: absolute;
    z-index: 9999;
    top: 0;
    left: -60px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    /* border-left: 1px solid black;
    border-bottom: 1px solid black; */
    /* border-right: 1px solid #eee; */
    background-color: #eee;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
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
  sidebarLogo: css`
    width: 100%;
    height: 60px;
    padding: 1rem 1.5rem;
  `,
};
