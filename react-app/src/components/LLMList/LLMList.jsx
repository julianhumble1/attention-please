import './LMMList.scss';

import LLMCard from '../LLMCard/LLMCard.jsx';


const LLMList = () => {
  return (
    <div className="LLMList">
      <h3>Large Language Models</h3>
      <div className='headings'>
        <span>Name</span>
        <span>Modality</span>
        <span>Company</span>
      </div>
          <LLMCard />
          <LLMCard />
          <LLMCard />
          <LLMCard />
          <LLMCard />
          <LLMCard />
    </div>
  )
}
export default LLMList