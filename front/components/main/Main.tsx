import Card from "../common/Card";

export default function Main() {
  return (
    <>
      <Card />
      {new Array(5).fill(0).map((v, i) => (
        <Card key={i} />
      ))}
    </>
  );
}
