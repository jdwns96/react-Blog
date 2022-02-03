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
    z-index: 9999;
    opacity: none;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-bottom: 2px solid #ced4da;
    border-bottom: 2px solid #be861d;
  `,
  headerWrapper: (theme: Theme) => css`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${theme.media.mobile} {
    }
  `,
  logo: css`
    background-color: #ffeaea;
  `,
};
