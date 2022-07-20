

import { fetchUser } from "../utils/fetchLocalStoragedata"

const userInfo = fetchUser()

export const initialState = {
    user: userInfo,
    foodItems: null,
}