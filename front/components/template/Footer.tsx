import { css, Theme } from "@emotion/react";

export default function Footer() {
  return (
    <footer css={style.footer}>
      <div css={style.footerWrapper}></div>
    </footer>
  );
}

const style = {
  footer: css`
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  `,
  footerWrapper: css`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
