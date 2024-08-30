import axios from 'axios';
import { getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance } from './mockedData';

const API_BASE_URL = 'http://localhost:3000';
const isMocked = false; 

const fetchData = async (url, fallbackFunction, userId) => {
  if (!isMocked) {
    try {
      const response = await axios.get(url);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  }else{
    return fallbackFunction(userId);
  }
};

export const getUserData = async (type, userId) => {
  let result;

  switch (type) {
    case "USER_MAIN_DATA":
      result = await fetchData(`${API_BASE_URL}/user/${userId}`, getUserInfos, userId);
      break;

    case "USER_ACTIVITY":
      result = await fetchData(`${API_BASE_URL}/user/${userId}/activity`, getUserActivity, userId);
      break;

    case "USER_AVERAGE_SESSIONS":
      result = await fetchData(`${API_BASE_URL}/user/${userId}/average-sessions`, getUserAverageSessions, userId);
      break;

    case "USER_PERFORMANCE":
      result = await fetchData(`${API_BASE_URL}/user/${userId}/performance`, getUserPerformance, userId);
      break;

    default:
      throw new Error("Unknown data type");
  }
  if (!result) {
    window.location.href = "/error";
  } else {
    return result;
  }
};
