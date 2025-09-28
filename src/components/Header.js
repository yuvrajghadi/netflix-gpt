const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 ">
      <div>
        <img className="w-48  px-8 " src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
      </div >
      <div className="flex items-center gap-4">
      <div>
        <img className="w-8 h-8 " src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="Avatar" />
     </div>
      <div>
        <button className="text-black font-semibold">Sign Out</button>
      </div>
      </div>
    </div>
  )
}

export default Header
