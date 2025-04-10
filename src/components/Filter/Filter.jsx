import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from "../../redux/filters/filtersSlice";
import { selectNameFilter } from '../../redux/filters/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filter;