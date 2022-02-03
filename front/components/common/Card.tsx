import { css, Theme } from "@emotion/react";
import Image from "next/image";
import test from "../../styles/image/test.png";

export default function Card() {
  return (
    <>
      <article css={style.card}>
        <div css={style.cardWrapper}>
          <div css={style.imageBox}>
            <Image src={test} alt="image"></Image>
          </div>
          <div css={style.textBox}>
            <h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, accusantium esse veritatis quasi deleniti rerum eum, sed adipisci debitis voluptas labore vel. Harum deleniti nihil sed,
                ipsa fugiat veritatis aliquam!
              </span>
            </h2>
            <p>
              <span className="mr-2">Home</span>
              <span>2022/2/22</span>
            </p>
            <hr />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, pariatur atque! Saepe rerum voluptatibus alias ad at non ratione necessitatibus. Id natus debitis eligendi beatae
              nisi atque nobis voluptates vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, pariatur atque! Saepe rerum voluptatibus alias ad at non ratione
              necessitatibus. Id natus debitis eligendi beatae nisi atque nobis voluptates vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, pariatur atque! Saepe rerum
              voluptatibus alias ad at non ratione necessitatibus. Id natus debitis eligendi beatae nisi atque nobis voluptates vero!
            </span>
          </div>
        </div>
      </article>
    </>
  );
}

const style = {
  card: css`
    margin: 1.5rem 0;
    cursor: pointer;
    opacity: none;
    border: 2px solid #be861d;
    background-color: #fff;
    padding: 1rem;
    width: 100%;
  `,
  cardWrapper: css`
    margin: 0.5rem 0;
    display: flex;
  `,
  imageBox: css`
    width: 30%;
    max-width: 200px;
    margin-right: 1rem;
  `,
  textBox: css`
    flex-grow: 1;
    width: 70%;

    & > h2 {
      font-size: 1.75rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0.5rem;
    }
    & > p {
      font-size: 0.8rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0.25rem;
    }
    & > hr {
      margin-bottom: 0.5rem;
    }
    & > span {
      font-size: 0.9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 16px;
      max-height: 112px;
      -webkit-line-clamp: 7; /* 표시하고자 하는 라인 수 */
      -webkit-box-orient: vertical;
    }
  `,
};
