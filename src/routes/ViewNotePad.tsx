import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { api } from "../api";

export function ViewNotePad() {
  const noteId = useParams();
  const redirect = useNavigate();

  const [notepad, updateNotepad] = useState({
    id: noteId.id,
    title: "",
    subtitle: "",
    content: "",
    created_at: "",
  });

  useEffect(() => {
    api.get(`/notepads/${noteId.id}`).then((conex) => {
      const notepad = conex.data;
      updateNotepad(notepad);
      console.log(notepad);
    });
  }, []);

  return (
    <>
      <div className="m-4">
        <span>{notepad.created_at}</span>
        <h1>{notepad.title}</h1>
        <p>{notepad.subtitle}</p>
        <p>{notepad.content}</p>

        <button
          className=" bg-gray-400 rounded-full p-1 my-2 text-sm flex justify-center items-center shadow-md"
          onClick={async () => {
            const res = await api.delete(`/notepads/${notepad.id}`);
            const deleteResponse = res.status;
            console.log(deleteResponse);

            if (deleteResponse === 200) {
              toast("deletado com sucesso");
              redirect("/");
            } else {
              toast("erro ao deletar");
            }
          }}
        >
          <span>Delete</span>
        </button>
      </div>
    </>
  );
}
