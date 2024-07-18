import './Filter.scss';
import { useState } from 'react';

const Filter = () => {

  const [setAccess] = useState("all");
  const [all, setAll] = useState("active");
  const [open, setOpen] = useState("");
  const [limited, setLimited] = useState("");
  const [closed, setClosed] = useState("");

  const handleAccess = (access) => {
    setAccess(access);
    switch (access) {
      case "all":
        if (all === "") {
          setAll("active");
          setOpen("");
          setLimited("");
          setClosed("");
        }
        break;
      case "open":
        if (open === "") {
          setAll("");
          setOpen("active");
          setLimited("");
          setClosed("");
        }
        break;
      case "limited":
        if (limited === "") {
          setAll("");
          setOpen("");
          setLimited("active");
          setClosed("");
        }
        break;
      case "closed":
        if (closed === "") {
          setAll("");
          setOpen("");
          setLimited("");
          setClosed("active");
        }
        break;
    }
  };

  return (
    <div className="filter">
          <h3>Filter</h3>
          <div className='search'>
              <input
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
              />
              <button type="submit" role="search">
          Search
        </button>
          </div>
          <div className='type'>
              <h5>Type : </h5>
              <div className='radios'>
                <input type="radio" id='text' name='text' />
                <label htmlFor="text">Text</label><br />
                <input type="radio" id='code' name='code' />
                <label htmlFor="code">Code</label><br/>
                <input type="radio" id='image' name='image' />
                <label htmlFor="image">Image</label><br />
                <input type="radio" id='audio' name='audio' />
                <label htmlFor="audio">Audio</label><br />
                <input type="radio" id='video' name='video' />
                <label htmlFor="video">Video</label><br/>
              </div>
          </div>
      <h5>Access</h5>
      <div className='access'>
        <button onClick={() => handleAccess("all")} className={all}>All</button>
        <button onClick={() => handleAccess("open")} className={open}>Open</button>
        <button onClick={() => handleAccess("limited")} className={limited}>Limited</button>
        <button onClick={() => handleAccess("closed")} className={closed}>Closed</button>
      </div>
    </div>
  )
}
export default Filter