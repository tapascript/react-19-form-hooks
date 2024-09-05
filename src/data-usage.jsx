import { useFormStatus } from "react-dom";

async function handleSubmit(query) {
  await new Promise((res) => setTimeout(res, 2000));
}


function Submit() {
  const { pending, data } = useFormStatus();
  console.log(pending, data)
  return (
    <div>
      <input 
        className="border border-gray-600 rounded mx-2 w-96 h-9 p-1"
        placeholder="Search a movie"
        type="text" 
        name="movieName" 
        disabled={pending}/>
      <button 
        className="bg-black text-white p-1 mt-2 rounded text-xl" 
        type="submit" 
        disabled={pending}>
        {pending ? "Searching..." : "Search"}
      </button>
      <br />
      <p className="text-3xl ml-2">{data ? `Searching for ${data?.get("movieName")}...`: ''}</p>
  </div>
  );
}

export const DataUsage = () => {
  return (
    <form action={handleSubmit}>
      <Submit />
    </form>
  )
}