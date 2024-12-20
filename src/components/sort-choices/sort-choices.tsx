import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeSort} from '../../store/action.ts';
import {
  DefaultSort,
  PriceAscendingSort,
  PriceDescendingSort,
  RatingDescendingSort
} from '../../consts/sort-filter-consts.ts';
import {SortFilter} from '../../types/sort-filter.ts';
import {Reducers} from '../../types/reducer.ts';

function SortChoices(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleSortChange = (sortType : SortFilter) => () => {
    dispatch(changeSort(sortType));
  };
  const isSortsOpened = useAppSelector((state) => state[Reducers.Main].sortsOpened);
  return (
    <ul className={`places__options places__options--custom ${isSortsOpened ? 'places__options--opened' : ''}`}>
      <li className="places__option places__option--active" tabIndex={0}
        onClick={handleSortChange(DefaultSort)}
      >Popular
      </li>
      <li className="places__option" tabIndex={0}
        onClick={handleSortChange(PriceAscendingSort)}
      >Price: low to high
      </li>
      <li className="places__option" tabIndex={0}
        onClick={handleSortChange(PriceDescendingSort)}
      >Price: high to low
      </li>
      <li className="places__option" tabIndex={0}
        onClick={handleSortChange(RatingDescendingSort)}
      >Top rated first
      </li>
    </ul>
  );
}

export default SortChoices;
