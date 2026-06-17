interface ButtonProps {
  children: React.ReactNode;
}

function Button({
  children
}: ButtonProps) {

  return (

    <button
      className="
      px-6
      py-3
      rounded-xl
      bg-purple-600
      hover:bg-purple-500
      transition-all
      duration-300
      purple-glow
      text-white
      font-semibold
      "
    >

      {children}

    </button>

  );
}

export default Button;