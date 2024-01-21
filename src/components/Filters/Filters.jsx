import { Formik } from "formik";
import makeList from "./makeList.json";
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filterSlice';
import { getFiltered } from '../../redux/operation';
import {
  ButtonSearch,
  ErrMsg,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Filters.styled";

export const Filters = () => {
  const dispatch = useDispatch();

  const handleSubmitFilter = ({ make }, { resetForm }) => {
    dispatch(setFilters(make));
    dispatch(getFiltered(make));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ make: '', rentalPrice: '', miliage: 0 }}
      onSubmit={handleSubmitFilter}
    >
      <StyledForm>
        <StyledLabel>
          Car brand
          <StyledInput component="select" name="make" className="make">
            <option value="default" hidden>
              Select brand
            </option>
            {makeList.map(make => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </StyledInput>
        </StyledLabel>

        <StyledLabel>
          Price/ 1 hour
          <StyledInput
            component="select"
            name="rentalPrice"
            className="rentalPrice"
          >
            <option value="default" hidden>
              To $
            </option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
          </StyledInput>
        </StyledLabel>

        <StyledLabel>
          Сar mileage / km
          <StyledInput name="mileageFrom" placeholder="From" className="left" />
          <ErrMsg name="mileageFrom" component="div" />
        </StyledLabel>
        <StyledLabel>
          <StyledInput name="mileageTo" placeholder="To" className="right" />
          <ErrMsg name="mileageTo" component="div" />
        </StyledLabel>

        <ButtonSearch type="submit">Search</ButtonSearch>
      </StyledForm>
    </Formik>
  );
};
