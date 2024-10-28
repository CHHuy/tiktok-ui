import { useEffect, useState, useRef } from 'react';
import TippyHeadless from '@tippyjs/react/headless';

import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const searchDebounced = useDebounce(searchValue, 600);

    const inputRef = useRef();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 1, 1, 1]);
    //     }, 0);
    // }, []);
    useEffect(() => {
        if (!searchDebounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(searchDebounced);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [searchDebounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <TippyHeadless
            visible={showResult && searchResult.length > 0}
            interactive={true}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    ref={inputRef}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon="fa-solid fa-spinner" />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
