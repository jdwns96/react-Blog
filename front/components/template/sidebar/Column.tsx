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
  border: 1px solid black;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 1rem;
`;
