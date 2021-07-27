import React, {useRef} from 'react';
import { Skeleton, Button, notification } from 'antd';
import {HeartIcon} from "../Icons";

const ListItem = ({item, loading, className, isDisabled}) => {
    const listRef = useRef(null);

    function handleFavorite(item) {
        let favoriteList = [];
        let favorites = localStorage.getItem('favorites');
        listRef.current.classList.add('my-favorite-item');

        if(favorites === null) {
            favoriteList.push(item);
            localStorage.setItem('favorites', JSON.stringify(favoriteList));

        } else {
            var previousFavoriteData = JSON.parse(localStorage.getItem('favorites'));
            previousFavoriteData.push(item);
            localStorage.setItem('favorites',JSON.stringify(previousFavoriteData));
        }

        notification['success']({
            message: 'Successfully',
            description: `${item.title} added your upvote list.`
        });
    }

    return (
        <Skeleton loading={loading}>
            <div className={`${className}`} ref={listRef} style={{backgroundImage: `url(${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension})`}}>
               <div className="overlay-item" />
                <Button disabled={isDisabled} className={"favorite-item"} onClick={() => {
                    handleFavorite(item);
                }} type="dashed" shape="circle" icon={
                    <HeartIcon color={'hotpink'} />
                } size={'large'} />
                <div className="grid-el-content">
                    <p className="grid-text-item">
                        {item.title}
                    </p>
                </div>
            </div>
        </Skeleton>
    );
};

export default ListItem;