import Axios from "axios"

export const getCoin = async () => {
    
    try {
        const config = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
            },
            url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false`
        };
        const response = await Axios(config);
        return { data: response.data, status: response.status}
        
    } catch (error) {
        console.log(error);
    };
    
};
