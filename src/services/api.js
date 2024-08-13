// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// fonction pour obtenir les informations d'un utilisateur
export const getUser = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// fonction pour obtenir l'activité de l'utilisateur
export const getActivity = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const getSessions = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const getPerformance = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
    return response.data;
  }catch(error) {
    console.log("error fetching user data:", error);
    throw(error);
  }
}