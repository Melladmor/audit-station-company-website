import HappyCustomersList from "./components/HappyCustomersList";

export default async function Page() {
  return (
    <div>
      <div className="flex gap-6 flex-wrap ">
        <HappyCustomersList />
      </div>
    </div>
  );
}
