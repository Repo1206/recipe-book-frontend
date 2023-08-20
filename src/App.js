import { useDispatch, useSelector } from "react-redux";
import { List, Input } from "antd";
import "antd/dist/antd.css";
import { setRecipes, setLoading } from "./recipesSlice"; // Import actions from your slice
import axios from "axios";

const App = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const loading = useSelector((state) => state.recipes.loading);
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    dispatch(setLoading(true));
    axios
      .get(`http://localhost:5000/api/recipes/search?query=${value}`)
      .then((response) => {
        dispatch(setRecipes(response.data));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        console.error(error);
        dispatch(setLoading(false));
      });
  };

  return (
    <div>
      <h1>Recipe Book: Share and Search for Recipes</h1>
      <Input.Search
        placeholder="Search recipes..."
        onSearch={handleSearch}
        enterButton
        style={{ marginBottom: 16 }}
      />
      <List
        loading={loading}
        dataSource={recipes}
        renderItem={(recipe) => (
          <List.Item>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
