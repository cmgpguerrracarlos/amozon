import React from 'react'
import Items from './Items.js'
import './css/List.css'
function List(props) {
    return (
        <div className="list">
            {
                props.items.map(item=>
                        <Items 
                            key={Math.floor(Math.random()*1000)}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                            onUpdateRating={props.onUpdateRating}
                            onDelete={props.onDelete}
                        />
                    )
            }
        </div>
    )
}

export default List
