export const selectAdvert = state => state.advert.advert;
export const selectPage = state => state.advert.page;
export const selectLimit = state => state.advert.limit;
export const selectFavorite = state => state.favorites.favorites;
export const selectAdvertFiltered = state => state.filter.filteredAdvert;
export const selectFilter = state => state.filter;

export const getError = state => state.advert.error;
export const getIsLoading = state => state.advert.isLoading;
