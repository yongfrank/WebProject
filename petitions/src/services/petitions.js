/*
 * @Author: Frank Chu
 * @Date: 2023-01-31 15:00:15
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-31 16:57:46
 * @FilePath: /WebProject/petitions/src/services/petitions.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */
import axios from 'axios';

const baseUrl = 'https://www.hackingwithswift.com/samples/petitions-1.json'
const baseRestCountries = 'https://restcountries.com/v3.1/all'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
}

const exportedObject = { getAll }
export default exportedObject