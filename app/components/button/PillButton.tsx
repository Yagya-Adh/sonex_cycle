"use client";

interface ButtonProps {
  text: string;
  variant?:
    | "primary"
    | "primary-outline"
    | "primary-outline-focus"
    | "angle-white"
    | "danger"
    | "dark";
  padding?: string;
}

const PillButton = ({ text, variant, padding }: ButtonProps) => {
  if (variant == "primary") {
    return (
      <button
        className={`rounded-full text-black border-stone-200 hover:bg-stone-200 items-center ${padding} `}
      >
        {text}
      </button>
    );
  }
  if (variant == "angle-white") {
    return (
      <button
        className={`" text-white border-white border rounded-full items-center" ${padding} `}
      >
        {text}
      </button>
    );
  }
  if (variant == "primary-outline") {
    return (
      <button
        className={` text-black border-black rounded-full hover:bg-stone-200 items-center ${padding} `}
      >
        {text}
      </button>
    );
  }

  if (variant == "primary-outline-focus") {
    return (
      <button
        className={`rounded-full text-black bg-stone-200 hover:border-black hover:bg-stone-200 items-center ${padding} `}
      >
        {text}
      </button>
    );
  }
  if (variant == "dark") {
    return (
      <button
        className={`rounded-full text-black border-black bg-stone-100 items-center ${padding} `}
      >
        {text}
      </button>
    );
  }

  if (variant == "danger") {
    return (
      <button
        className={` text-rose-600 border-rose-600  rounded-full items-center ${padding} `}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      className={`rounded-full border-stone-100 hover:bg-stone-100 items-center ${padding} `}
    >
      {text}
    </button>
  );
};

export default PillButton;
