import { useFormStatus } from "react-dom";

async function handleSubmit(query) {
  await new Promise((res) => setTimeout(res, 2000));
}

export const Pitfall = () => {
  const { pending } = useFormStatus();
  
  return (
    <form action={handleSubmit}>
      <button
        className="bg-black text-white p-1 rounded text-3xl"
        type="submit"
        disabled={pending}
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
