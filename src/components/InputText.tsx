import { useState } from "react";

type inputProps = {
  placeholder: string;
};

export function InputText(props: inputProps) {
  const [content, updateContent] = useState("");

  return (
    <>
      <input
        className="bg-slate-50 resize-none w-full h-full mx-[1rem] py-1 outline-none"
        placeholder={props.placeholder}
        onChange={(event) => {
          updateContent(event.target.value);
        }}
        value={content}
      ></input>
    </>
  );
}
