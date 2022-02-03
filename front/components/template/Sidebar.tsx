import { useCallback } from "react";
import { css, Theme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/rootReducer";
import { sidebarToggleAction } from "../../store/global/sidebar/action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const dispatch = useDispatch();
  const { toggle } = useSelector((store: RootState) => store.sidebar);

  const onToggle = useCallback(() => {
    dispatch(sidebarToggleAction());
  }, []);

  return (
    <>
      <nav css={toggle ? style.sidebarOn : style.sidebarOff}>
        <div css={style.hamberger} onClick={onToggle}>
          <FontAwesomeIcon icon={faHamburger} />
        </div>
        <div>
          <div>사용자정보</div>
          <div>
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

const style = {
  sidebarOn: css`
    z-index: 9999;
    position: absolute;
    top: 0;
    right: 0px;
    width: 300px;
    height: 100vh;
    background-color: aqua;
    transition: 0.3s;
  `,
  sidebarOff: css`
    z-index: 9999;
    position: absolute;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100vh;
    background-color: aqua;
    transition: 0.3s;
  `,
  hamberger: css`
    position: absolute;
    z-index: 9999;
    top: 0;
    left: -60px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  `,
};
