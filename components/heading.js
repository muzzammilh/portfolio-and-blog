export default function Heading(props) {
  return (
    <>
      <div className="font-bold text-4xl sm:text-5xl mt-5">
        {props.text}
      </div>
    </>
  );
}
