import './Filter.scss';

const Filter = () => {
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
          
    </div>
  )
}
export default Filter