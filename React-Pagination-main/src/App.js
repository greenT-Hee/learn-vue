import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import CryptoList from "./components/CryptoList";
import Pagination from "./components/Pagination";

const App = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    

    useEffect(async () => {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );

        setCoinsData(response.data);
    }, []);
    
    // 각 페이지 별 첫번째 & 마지막 인덱스 찾기 
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='app'>
            <h1>Crypto Gallery</h1>
            <CryptoList coinsData={currentPosts} />
            <Pagination 
                totalPost = {coinsData.length}
                postsPerPage = {postsPerPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default App;
