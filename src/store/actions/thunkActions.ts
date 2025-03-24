import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'
import { setContents } from './data'

export const getData = createAsyncThunk<void, string, { dispatch: AppDispatch }>('groupedActions/getData', async (string, { dispatch }) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any[] = await axios.get(`https://fakeurl.fake/${string}`).then((response) => response.data.results)
        dispatch(setContents(data))
    } catch (e) {
        console.error(e)
        throw e
    }
})
