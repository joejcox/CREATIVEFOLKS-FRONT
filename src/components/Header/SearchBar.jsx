import searchIcon from "assets/icons/search.svg"
import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState("")
  const searchRef = useRef(null)

  useEffect(() => {
    if (value === "") return null

    const handleUserEnter = (e) => {
      if (e.keyCode !== 13) return

      navigate(`/?query=${value}`)
      setValue("")
    }

    document.addEventListener("keydown", handleUserEnter)

    return () => document.removeEventListener("keydown", handleUserEnter)
  }, [value, navigate])

  return (
    <div className="relative mr-auto">
      <img
        src={searchIcon}
        alt=""
        className="absolute left-[47.3px] top-[17.4px] cursor-pointer"
        onClick={() => {
          value !== "" && navigate(`/?query=${value}`)
        }}
      />
      <input
        type="text"
        className="`w-search h-search rounded-main outline-white bg-grey--light pl-[112px]"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={searchRef}
      />
    </div>
  )
}
export default SearchBar
