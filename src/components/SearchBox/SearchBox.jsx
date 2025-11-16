import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Find contacts by name…"
      value={value}
      onChange={e => dispatch(changeFilter(e.target.value))}
    />
  );
}
