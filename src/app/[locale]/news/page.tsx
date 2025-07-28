import NewList from "./components/NewList";

export default async function Page() {
  return (
    <div>
      <div className="flex gap-6 flex-wrap ">
        <NewList />
      </div>
    </div>
  );
}
