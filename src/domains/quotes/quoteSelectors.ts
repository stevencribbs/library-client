import { RootState } from '~/store/store';

export const selectAllQuotes = (state: RootState) => state.quotesData.quotes;
