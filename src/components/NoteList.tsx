import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type NotePad = {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
  content: string;
};

export type NotePadProps = {
  notepads: NotePad[];
};

export function NoteList({ notepads }: NotePadProps) {
  return (
    <>
      <ul>
        {notepads.map((note) => {
          return (
            <>
              <Link to={"/notepad/" + note.id}>
                <div className="p-5 border-solid border-white border-b-2">
                  <li key={note.id}>
                    <h2>{note.title}</h2>
                    <h4>{note.subtitle}</h4>
                    <p>{note.content}</p>
                    <span>{note.created_at}</span>
                  </li>
                </div>
              </Link>
            </>
          );
        })}
      </ul>
    </>
  );
}
