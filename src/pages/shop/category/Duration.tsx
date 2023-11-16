import { useAppSelector } from "../../../redux/hook";
import CategoryTemplate from "./CategoryTemplate";

const Duration = () => {
  const { foods } = useAppSelector((state) => state.food);
  let readyTime: string[] = [];

  if (foods !== null) {
    let uniqueFoodReadyTime = new Set(
      foods.flatMap(({ readyTime }) => `${readyTime} minutes`)
    );

    readyTime = Array.from(uniqueFoodReadyTime);
  }

  return <>{<CategoryTemplate title="Duration" content={readyTime} />}</>;
};

export default Duration;
