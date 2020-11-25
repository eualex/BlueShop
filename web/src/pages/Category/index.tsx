import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

import * as Styles from "./styles";

import { useTheme } from "../../contexts/theme";
import { useCategory } from "../../contexts/category";

interface PropsCategory {
  name: string;
  item: string;
}

const ChooseCategory: React.FC = React.memo(() => {
  const history = useHistory();

  const { theme } = useTheme();
  const { setCategory } = useCategory();
  const [hiddenSneakers, setHiddenSneakers] = useState(true);
  const [hiddenEletronics, setHiddenEletronics] = useState(true);
  const [classContainerSneakers, setClassContainerSneakers] = useState("");
  const [classContainerEletronics, setClassContainerEletronics] = useState("");

  const handleCategory = (category: PropsCategory) => {
    setCategory(category);

    history.push("main");
  };

  const toggleContainerSneakers = () => {
    classContainerSneakers === "arrow-sneakers"
      ? setClassContainerSneakers("")
      : setClassContainerSneakers("arrow-sneakers");

    setHiddenSneakers(!hiddenSneakers);
  };

  const toggleContainerEletronics = () => {
    classContainerEletronics === "arrow-eletronics"
      ? setClassContainerEletronics("")
      : setClassContainerEletronics("arrow-eletronics");

    setHiddenEletronics(!hiddenEletronics);
  };

  return (
    <Styles.Container>
      <Styles.Title>
        <h1>Choose a Category</h1>
      </Styles.Title>

      <Styles.Wrapper>
        <Styles.ContainerDropdown className={classContainerSneakers}>
          <span onClick={toggleContainerSneakers}>
            <span>
              <span>Sneakers</span>
              <RiArrowRightSLine size={35} color={theme.colors.textPrimary} />
            </span>
          </span>

          <Styles.WrapperDropdown Hidden={hiddenSneakers}>
            <div>
              <span
                onClick={() =>
                  handleCategory({ name: "sneakers", item: "woman" })
                }
              >
                Woman
              </span>
              <span
                onClick={() =>
                  handleCategory({ name: "sneakers", item: "man" })
                }
              >
                Man
              </span>
              <span
                onClick={() =>
                  handleCategory({ name: "sneakers", item: "all" })
                }
              >
                All
              </span>
            </div>
          </Styles.WrapperDropdown>
        </Styles.ContainerDropdown>

        <Styles.ContainerDropdown className={classContainerEletronics}>
          <span onClick={toggleContainerEletronics}>
            <span>
              <span>Eletronics</span>
              <RiArrowRightSLine size={35} color={theme.colors.textPrimary} />
            </span>
          </span>

          <Styles.WrapperDropdown Hidden={hiddenEletronics}>
            <div>
              <span
                onClick={() =>
                  handleCategory({ name: "eletronics", item: "smartphone" })
                }
              >
                Smartphones
              </span>
              <span
                onClick={() =>
                  handleCategory({ name: "eletronics", item: "notebook" })
                }
              >
                Notebooks
              </span>
              <span
                onClick={() =>
                  handleCategory({ name: "eletronics", item: "all" })
                }
              >
                All
              </span>
            </div>
          </Styles.WrapperDropdown>
        </Styles.ContainerDropdown>
      </Styles.Wrapper>
    </Styles.Container>
  );
});

export default ChooseCategory;
