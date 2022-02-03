import { css, Theme } from "@emotion/react";

export default function Header() {
  return (
    <header css={style.header}>
      <div css={style.headerWrapper}>
        <div css={style.logo}>
          <span>blog</span>
        </div>
      </div>
    </header>
  );
}

const style = {
  header: css`
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  `,
  headerWrapper: (theme: Theme) => css`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${theme.media.mobile} {
      /* background-color: black; */
    }
  `,
  logo: css`
    background-color: #ffeaea;
  `,
};
