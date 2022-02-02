import { css, Theme } from "@emotion/react";

export default function Header() {
  return (
    <nav css={style.sidebar}>
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
  );
}

const style = {
  sidebar: css`
    position: fixed;
    top: 0;
    right: -100px;
    width: 300px;
    height: 100vh;
    background-color: aqua;
  `,
};
