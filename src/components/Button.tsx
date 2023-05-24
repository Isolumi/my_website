const Button = (props: { text: string }) => {
  const text = props.text;
  return (
    <button
      data-dropdown-toggle="dropdown"
      className="border-2 w-full justify-center text-black bg-white hover:underline focus:ring-4
      font-medium text-sm px-4 py-2 text-center inline-flex items-center"
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
