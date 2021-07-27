import React, {useEffect, useState} from 'react';
import {Spin, Result, Button} from 'antd';
import {getList, HASH_VALUE} from "../../appRedux/actions";
import {connect} from "react-redux";
import PageList from "../../components/PageList";
import marvel_logo from "../../assets/images/marvel_logo.png";
import SearchItem from "../../components/SearchItem";

const HomePage = (props) => {
    const {list, loading, error, getList} = props;
    const [query, setQuery] = useState('');
    const [offsetState, setOffsetState] = useState(0);
    var favorites = localStorage.getItem('favorites');
    var arrFavorites = JSON.parse(favorites);

    useEffect(() => {
        //we can fetch the characters when the component called.
        if(query === '') {
            getList('comics', offsetState);
        } else {
            getList('comics', offsetState, query);
        }

        //i put the hash value here because every hash value can change data will be update and work. We do not need to refresh the page.
    }, [HASH_VALUE, query, favorites, offsetState]);

    if(error) {
        return (
            <Result
                status="error"
                title={`${error.message}`}
                extra={null}
            />
        )
    }

    return (
        <div>
            <div className={"search-item"}>
                <img src={`${marvel_logo}`} alt=""/>
                <SearchItem onSearch={(query)=> setQuery(query)} />
            </div>
            <Spin spinning={loading}>
                <div className={"section-list-item"}>
                    <div className="container">
                        <PageList items={list} loading={loading} favorites={arrFavorites} />

                        <div className={"footer-pagination"}>
                            <Button disabled={offsetState === 0} onClick={() => {
                                window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
                                setOffsetState(offsetState - 1);
                            }}>
                                Previous Page
                            </Button>
                            <Button onClick={() => {
                                window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
                                setOffsetState(offsetState + 1);
                            }}>
                                Next Page
                            </Button>
                        </div>
                    </div>
                </div>
            </Spin>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.list.loading,
        error: state.list.error,
        list: state.list.list,
    }
}

export default connect(mapStateToProps, {getList})(HomePage);