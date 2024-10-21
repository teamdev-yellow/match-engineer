function Group() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span className="my-4 text-xl font-bold">My Group</span>
        <button className="h-10 rounded-md bg-neutral-900 px-14 py-2 text-sm text-white">
          Submit
        </button>
      </div>
      <div className="flex-1 bg-neutral-100">CONTENT</div>
    </div>
  );
}

export default Group;
