import { css, Theme } from "@emotion/react";

export default function Column(props: { children: string }) {
  const { children } = props;

  return (
    <div css={style}>
      <span>{children}</span>
    </div>
  );
}

const style = css`
  padding: 1rem;
  width: 100%;

  color: #fff;
  background-color: #be861d;
  cursor: pointer;
  margin-bottom: 1rem;
`;
