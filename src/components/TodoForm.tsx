import { FormEvent, useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
}

export default function TodoForm(props: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(text);
  };
  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center relative group">
        <input
          type="text"
          placeholder="Enter shot count"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded-md"
        />
        <span className="ml-2 text-blue-600 cursor-pointer">ℹ️</span>
        <div className="absolute left-full ml-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded-md py-1 px-2 z-10 w-48">
          Ange antal skott.
        </div>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}
