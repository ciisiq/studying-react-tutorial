export default function Square({ value }) {
  function handleClick() {
    console.log('Clicked');
  }

  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}
