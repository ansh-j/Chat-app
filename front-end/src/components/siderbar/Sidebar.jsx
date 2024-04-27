import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col max-md:h-[520px]">
        <SearchInput/>
        <div className="divider px-3"></div>
        <Conversations/>
        <LogoutButton/>
        <div className="divider px-3 md:hidden"></div>
    </div>
  )
}

export default Sidebar