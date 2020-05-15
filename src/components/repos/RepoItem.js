import React from 'react'
import PropTypes from 'prop-types'

 const RepoItem = ({repo}) => {
    return (
        <div className="card">
            <img src={repo.owner.avatar_url} alt="" style={{width: '65px', height: '65px'}} className='round-img my-1'/>
            <h4><a href={repo.html_url}>{repo.name}</a></h4>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem

