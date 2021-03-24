// Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the data
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getUTCFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// Upcoming games

const upComing_Games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// New games

const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upComing_Games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
