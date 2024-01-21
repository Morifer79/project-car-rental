import { Filters } from 'components/Filters/Filters';
import {
  CatalogFrame,
  CatalogItem,
  CatalogList,
  CatalogWrapper,
  LoadMoreBtn,
} from './Catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { getAll } from '../../redux/operation';
import { selectAdvert, selectPage } from '../../redux/selectors';
import { loadMore } from '../../redux/advertSlice';

export const Catalog = () => {
  const adverts = useSelector(selectAdvert);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll({ page }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(loadMore({ page: page + 1, limit: 12 }));
  };

  return (
    <>
      <Filters />
      <CatalogFrame>
        <CatalogWrapper>
          <CatalogList>
            {adverts.map(item => (
              <CatalogItem key={item.id}>
                <ItemCard advert={item} />
              </CatalogItem>
            ))}
          </CatalogList>
        </CatalogWrapper>
          <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
      </CatalogFrame>
    </>
  );
};
