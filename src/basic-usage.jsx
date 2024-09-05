
import { useFormStatus } from "react-dom";

async function handleSubmit(query) {
  await new Promise((res) => setTimeout(res, 1000));
}


function Submit() {
  const { pending } = useFormStatus();
  console.log(pending)
  return (
    <button 
      className="bg-black text-white p-1 rounded text-3xl" 
        type="submit" 
        disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}


export const BasicUsage = () => {
  return (
    <form action={handleSubmit}>
      <Submit />
    </form>
  )
}