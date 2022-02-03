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
    margin-top: 60px;
  `,
  mainWrapper: (theme: Theme) => css`
    padding: 1.5rem 1rem;
    width: 80%;
    max-width: 1920px;

    ${theme.media.mobile} {
      width: 100%;
    }
  `,
};
