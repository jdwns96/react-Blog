import { css, Theme } from "@emotion/react";

export default function Body({ children }: { children: JSX.Element }) {
  return (
    <main css={style.main}>
      <div css={style.mainWrapper}>{children}</div>
    </main>
  );
}

const style = {
  main: css`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  mainWrapper: css`
    width: 90%;
  `,
};
