import React from 'react';
import ListItem from './../ListItem';

const PageList = ({items, loading, favorites}) => {

    //this function is looking the exist id for upvoted or favorites Items
    function itemExists (id) {
        if(favorites !== null) {
            return favorites.some(function(el) {
                return el.id === id;
            });
        }
    }

    return (
        <div className="grid-item">
            {
                items && items.map((item) => {
                    return (
                        <ListItem key={item.id}
                                  item={item}
                                  loading={loading}
                                  className={itemExists(item.id) ? `grid-el my-favorite-item` : `grid-el`}
                                  isDisabled={itemExists(item.id) ? true : false}
                        />
                    )
                })
            }
        </div>
    )
}

export default PageList;