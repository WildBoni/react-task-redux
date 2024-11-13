import { useRef } from "react";
import Button from "./ui/Button";

export default function Form({ addTask }) {
  // uso un ref per accedere al testo scritto dall'utente nell'input
  const inputRef = useRef();

  // aggiungo un task
  function handleAddTask() {
    // addTask arriva come prop e serve ad aggiornare l'elenco dei task
    addTask(inputRef.current.value);
  }
  return (
    <>
      <h2>Che cosa devi fare?</h2>
      <input
        type="text"
        ref={inputRef}
        className="border border-gray-400 p-2 mt-2 me-2 rounded-md"
      />
      <Button onClick={handleAddTask}>
        Aggiungi
        {/* <span className="font-bold"> nuovo task</span> */}
      </Button>
    </>
  );
}
