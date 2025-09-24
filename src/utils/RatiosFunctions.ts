export function getEbitda(ebit: number, amortisation: number, depreciation: number): number {
    ebit = typeof ebit === 'string' ? parseFloat(ebit) : Number(ebit);
    amortisation = typeof amortisation === 'string' ? parseFloat(amortisation) : Number(amortisation);
    depreciation = typeof depreciation === 'string' ? parseFloat(depreciation) : Number(depreciation);
    let ebitda = (ebit || 0) + (amortisation || 0) + (depreciation || 0);
    return ebitda;
}

export function getDividendPerShare(dividend: number, number_of_shares: number ): number {
    dividend = typeof dividend === 'string' ? parseFloat(dividend) : Number(dividend);
    number_of_shares = typeof number_of_shares === 'string' ? parseFloat(number_of_shares) : Number(number_of_shares);
    let dividend_per_share = (dividend || 0) / (number_of_shares || 0);
    return dividend_per_share;
}

export function getDividendPercent(dividend: number, number_of_shares: number, price: number ): number {
    dividend = typeof dividend === 'string' ? parseFloat(dividend) : Number(dividend);
    number_of_shares = typeof number_of_shares === 'string' ? parseFloat(number_of_shares) : Number(number_of_shares);
    price = typeof price === 'string' ? parseFloat(price) : Number(price);
    let dividend_percent = ((dividend || 0) / (number_of_shares || 0)) / price * 100;
    return dividend_percent;
}

export function getPayout(dividend: number, net_profit: number ): number {
    dividend = typeof dividend === 'string' ? parseFloat(dividend) : Number(dividend);
    net_profit = typeof net_profit === 'string' ? parseFloat(net_profit) : Number(net_profit);
    let payout = ((dividend || 0) / (net_profit || 0)) * 100;
    return payout;
}

export function getPER(eps: number, price: number ): number {
    eps = typeof eps === 'string' ? parseFloat(eps) : Number(eps);
    price = typeof price === 'string' ? parseFloat(price) : Number(price);
    let per = ((price || 0) / (eps || 0));
    return per;
}