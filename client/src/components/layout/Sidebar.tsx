import {
  LayoutDashboard,
  FolderGit2,
  ClipboardCheck,
  BarChart3,
  LogOut
} from "lucide-react";

function Sidebar() {

  return (

    <aside
      className="
      w-64
      h-screen
      bg-zinc-950
      border-r
      border-white/10
      fixed
      left-0
      top-0
      "
    >

      <div
        className="
        p-6
        "
      >

        <h1
          className="
          text-2xl
          font-bold
          text-purple-400
          "
        >

          AI Review

        </h1>

      </div>

      <nav
        className="
        px-4
        space-y-2
        "
      >

        <a
          href="/dashboard"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-lg
          hover:bg-purple-500/10
          text-white
          "
        >

          <LayoutDashboard size={20} />

          Dashboard

        </a>

        <a
          href="/repositories"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-lg
          hover:bg-purple-500/10
          text-white
          "
        >

          <FolderGit2 size={20} />

          Repositories

        </a>

        <a
          href="/reviews"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-lg
          hover:bg-purple-500/10
          text-white
          "
        >

          <ClipboardCheck size={20} />

          Reviews

        </a>

        <a
          href="/analytics"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-lg
          hover:bg-purple-500/10
          text-white
          "
        >

          <BarChart3 size={20} />

          Analytics

        </a>

        <a
          href="/login"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-lg
          hover:bg-red-500/10
          text-red-400
          "
        >

          <LogOut size={20} />

          Logout

        </a>

      </nav>

    </aside>

  );

}

export default Sidebar;