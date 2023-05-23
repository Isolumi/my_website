const Button = (props: { text: string }) => {
  const text = props.text;
  return (
    <button
      data-dropdown-toggle="dropdown"
      className="w-full justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
      focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
