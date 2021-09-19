export default function Heading(props) {
  return (
    <>
      <div className="font-bold text-center text-3xl sm:text-4xl mt-5">
        {props.text}
      </div>
    </>
  );
}
