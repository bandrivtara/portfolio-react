import React from 'react';

const List = (props) => {

  return (
    <div className="projects__list centered">
      {props.projectsData.map(elem =>
        <button
          key={elem.id}
          className={props.project === elem.id ? 'active' : null}
          onClick={() => props.changeProject(elem.id)}
        >
          <h3>{elem.name}</h3>
          <hr className="projects__list--btn-underline" />
        </button>
      )}
    </div>
  )
}

export default List;