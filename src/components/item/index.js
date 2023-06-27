import './index.css'

const Item = props => {
  const {item, del} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = item

  const onDel = () => {
    del(id)
  }

  return (
    <li>
      <div className="item">
        <p className="time">{timeAccessed}</p>
        <div className="item-container">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <p className="title"> {title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button type="button" data-testid="delete" onClick={onDel}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="del-img"
        />
      </button>
    </li>
  )
}

export default Item
