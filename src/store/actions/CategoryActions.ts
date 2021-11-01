import { Category, CategoryDispatch, CategoryForm } from "../../types/category";
import api from "../../utils/api";

export const getCategories = () => async (dispatch: CategoryDispatch) => {
  dispatch({ type: "GET_CATEGORIES_START" });
  try {
    const response = await api.get<Category[]>("/categories");
    dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_CATEGORIES_START" });
  }
};

export const addCategory =
  (form: CategoryForm) => async (dispatch: CategoryDispatch) => {
    dispatch({ type: "ADD_CATEGORIES_START" });
    try {
      const response = await api.post<Category>("/categories", form);
      dispatch({ type: "ADD_CATEGORIES_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "ADD_CATEGORIES_ERROR" });
    }
  };
