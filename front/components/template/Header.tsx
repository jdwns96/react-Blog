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
    opacity: none;
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid black; */
    /* background-color: #be861d; */
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
      /* background-color: black; */
    }
  `,
  logo: css`
    background-color: #ffeaea;
  `,
};
