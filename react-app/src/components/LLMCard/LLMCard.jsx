import './LLMCard.scss';

const LLMCard = ({ key, type, name, organization, description, created, size, modality, access, license, dependencies }) => {
    return (
        <div className='LLMCard '>
          <span>{name}</span>
          <span>{modality}</span>
          <span>{organization}</span>
        </div>
  )
}
export default LLMCard