import { useAppSelector } from "../../../redux/hook";
import CategoryTemplate from "./CategoryTemplate";

const Cuisines = () => {
  const { foods } = useAppSelector((state) => state.food);

  let foodTypes: string[] = [];
  if (foods !== null) {
    let uniqueFoodTypes = new Set(
      foods.flatMap(({ foodType }) => foodType.map((el) => el.toLowerCase()))
    );
    foodTypes = Array.from(uniqueFoodTypes);
  }

  return (
    <>
      <CategoryTemplate title="Cuisines" content={foodTypes} />
    </>
  );
};

export default Cuisines;
