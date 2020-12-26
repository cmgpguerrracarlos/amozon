import React from 'react'
import Items from './Items.js'
import './css/List.css'
function List(props) {
    return (
        <div className="list">
            {
                props.items.map(item=>
                        <Items 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                        />
                    )
            }
        </div>
    )
}

export default List
