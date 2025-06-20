function MobileNavBar() {
  return (
    <>
      <nav>
        {/* 選項 */}
        <button className="options">
          <i className="fa-solid fa-bars"></i>
        </button>
        {/* 專案 */}
        <button className="project">
          <i className="fa-solid fa-folder-closed"></i>
        </button>
        {/* 主頁 */}
        <button className="home">
          <i className="fa-solid fa-house"></i>
        </button>
        {/* 日曆 */}
        <button className="calendar">
          <i className="fa-solid fa-calendar"></i>
        </button>
        {/* 帳戶 */}
        <button className="account">
          <i className="fa-solid fa-user"></i>
        </button>
      </nav>
    </>
  );
}
export default MobileNavBar;
