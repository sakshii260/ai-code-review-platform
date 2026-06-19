function Topbar() {

  return (

    <header
      className="
      h-20
      border-b
      border-white/10
      flex
      items-center
      justify-between
      px-8
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        text-white
        "
      >

        Dashboard

      </h2>

      <div
        className="
        text-purple-400
        "
      >

        Welcome Back 👋

      </div>

    </header>

  );

}

export default Topbar;