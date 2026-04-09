export const trading = {
	enabled: true,
	tradeAmount: 0.1,
	tradingScore: 75,
	botTimer: 360 // In mins 5, 20, 10
};

export const timestamp_str_alt = (date: string | number) => {
	const d = new Date(date);
	const date_ = d.getFullYear() + "-" + ((d.getUTCMonth() + 1) < 10 ? "0" + (d.getUTCMonth() + 1) : (d.getUTCMonth() + 1)) + "-" + (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());
	const time_ = (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + ":" + (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());
	return date_ + " " + time_;
};

export const hypeKeywords = ["AI", "Tiktok", "Meme", "Bonk", "Shiba", "Doge", "Community", "100x", "Moon", "Pump"];
export const searchWords = hypeKeywords.toString().toLowerCase().replace(",", "%20");

export function calculateTrendScore(pair: any): number {
	let score = 0;
	const now = Date.now(); // Get current timestamp in milliseconds

	// Default values to avoid undefined errors
	const liquidity = pair.liquidity?.usd || 0;
	
};
