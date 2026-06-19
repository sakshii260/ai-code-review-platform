import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {

  children:
  React.ReactNode;

}

function DashboardLayout({
  children
}: Props) {

  return (

    <div
      className="
      bg-black
      min-h-screen
      "
    >

      <Sidebar />

      <div
        className="
        ml-64
        "
      >

        <Topbar />

        <main
          className="
          p-8
          "
        >

          {children}

        </main>

      </div>

    </div>

  );

}

export default DashboardLayout;