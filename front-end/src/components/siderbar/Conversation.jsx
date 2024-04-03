const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-cyan-950 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold ">John Doe</p>
            <span className="text-xl">🫡</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"/>
    </>
  );
};

export default Conversation;
