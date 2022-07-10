export function NavBar() {
  return (
    <div className="navbar">
      <div className="InputComponent">
        <input type="search" className="search" placeholder="Search for..." />
        <button className="searchButton">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <div className="notifcation">
        <span className="material-symbols-outlined">notifications</span>
        <span className="material-symbols-outlined">mail</span>
        <hr className="line" />
        <span className="profileName">Nandha kumar</span>
        <span className="material-symbols-outlined profile">person</span>
      </div>
    </div>
  );
}
