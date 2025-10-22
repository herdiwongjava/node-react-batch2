export const Welcome = (props) => {
  return (
    <>
      <h1 className="card">
        Halo Pak <span style={{ color: props.color }}>{props.job}</span>, Mr.{" "}
        {props.name} 😎
      </h1>
      <p>Founder of Kangen Ketan Indonesia 🍚</p>
    </>
  );
};
