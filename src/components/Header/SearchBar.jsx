import searchIcon from "assets/icons/search.svg"
import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState("")
  const searchRef = useRef(null)

  useEffect(() => {
    const handleUserEnter = (e) => {
      if (document.activeElement !== searchRef.current) return
      if (e.keyCode !== 13) return

      navigate(`/?query=${value}`)
      setValue("")
    }

    document.addEventListener("keydown", handleUserEnter)

    return () => document.removeEventListener("keydown", handleUserEnter)
  }, [value, navigate])

  return (
    <div className="relative w-full sm:w-2/3 lg:w-1/4 lg:ml-[50px] xl:ml-[117px] xl:mr-auto mb-6 lg:mb-0">
      <img
        src={searchIcon}
        alt=""
        className="absolute left-4 lg:left-[25px] xl:left-[47.3px] top-[7.5px] xl:top-[17.4px] cursor-pointer w-[25px] xl:w-auto"
        onClick={() => {
          value !== "" && navigate(`/?query=${value}`)
        }}
      />
      <input
        type="text"
        className="w-full h-[40px] lg:w-[1/2] xl:w-search xl:h-search rounded-main outline-white bg-grey--light pl-[56px] xl:pl-[112px]"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={searchRef}
      />
    </div>
  )
}
export default SearchBar
