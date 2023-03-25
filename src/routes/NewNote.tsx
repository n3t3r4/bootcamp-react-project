import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { api } from "../api";
import { getNotes } from "../components/GetNotes";
import { InputText } from "../components/InputText";
import { NoteList, NotePad } from "../components/NoteList";

type newNoteProps = {
  title: "";
  subtitle: "";
  content: "";
};

export function NewNote() {
  getNotes();
  const initialNotes: NotePad[] = [];
  const [notepads, updateNotePads] = useState(initialNotes);
  const [content, updateContent] = useState("");
  const [title, updateTitle] = useState("");
  const [subtitle, updateSubtitle] = useState("");

  useEffect(() => {
    getNotes().then((notepads) => {
      updateNotePads(notepads);
      /* console.log(notepads); */
    });
  }, []);

  const redirect = useNavigate();

  return (
    <>
      <div
        id="frame"
        className="bg-gray-200 m-10 rounded h-auto w-auto flex flex-col shadow-2xl sm:flex-row"
      >
        <Link to="/">
          <div className="flex-column p-5">
            <div className="bg-gray-300 rounded-md w-auto flex justify-center items-center">
              Notas
            </div>
            <div className="max-h-screen overflow-scroll">
              <Link to="/">
                <NoteList notepads={notepads} />
              </Link>
            </div>
          </div>
        </Link>
        <div className="bg-slate-50 rounded m-5 py-5 w-[90%] h-auto flex sm:w-full justify-between">
          {/* <InputText placeholder="Digite sua mensagem" /> */}
          <div>
            <input
              className="bg-slate-50 resize-none w-full h-[5%] mx-[1rem] py-1 outline-none"
              placeholder="digite aqui o título"
              onChange={(event) => {
                updateTitle(event.target.value);
              }}
              value={title}
            ></input>
            <input
              className="bg-slate-50 resize-none w-full h-[5%] mx-[1rem] py-1 outline-none"
              placeholder="digite aqui o subtítulo"
              onChange={(event) => {
                updateSubtitle(event.target.value);
              }}
              value={subtitle}
            ></input>

            <input
              className="bg-slate-50 resize-none w-full h-[20%] mx-[1rem]  outline-none"
              placeholder="mensagem..."
              onChange={(event) => {
                updateContent(event.target.value);
              }}
              value={content}
            ></input>
          </div>
          <div className="flex flex-col justify-end mx-10">
            <button
              className=" bg-gray-400 rounded-full px-4 pb-1 m-2 text-4xl flex justify-center items-center shadow-md"
              onClick={() => {
                api
                  .post("/notepads", {
                    title: `${title}`,
                    subtitle: `${subtitle}`,
                    content: `${content}`,
                  })
                  .then((data) => {
                    if (data.status === 201) {
                      toast("enviado com sucesso");
                      redirect("/");
                    } else {
                      toast("erro ao enviar");
                    }
                    console.log(content);
                  });
              }}
            >
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
