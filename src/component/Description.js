import React from 'react'

export const Description = (props) => {
    let movie = props.movies.find(el => el.titre === props.match.params.titre)
    
    return (
        <div>
            <h1>Description</h1>
            <p>{ movie.description}</p>
        </div>
    )
}
