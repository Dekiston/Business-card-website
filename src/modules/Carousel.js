import { useState, useEffect, Children, cloneElement } from "react";
import "../App.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Carusel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState([]);

  const LeftArrowClick = () => {
    setOffset((currentOffset) => {
      if (currentOffset >= -100) {
        return -400;
      }
      const newOffset = currentOffset + 100;
      return newOffset;
    });
  };

  const RightArrowClick = () => {
    setOffset((currentOffset) => {
      if (currentOffset <= -300) {
        return 0;
      }
      const newOffset = currentOffset - 100;
      return newOffset;
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minHeight: "100%",
            maxHeight: "100%",
            minWidth: "100%",
            maxWidth: "100%",
          },
        });
      })
    );
  }, []);

  return (
    <div className="mainWindow">
      <div className="window">
        {offset === 0 || offset === -400 ? (
          <div
            className="allPages"
            style={{ transform: `translateX(${offset}%)` }}
          >
            {pages}
          </div>
        ) : (
          <div
            className="allPagesAnimation"
            style={{ transform: `translateX(${offset}%)` }}
          >
            {pages}
          </div>
        )}
      </div>
      <FaChevronLeft className="arrow-left" onClick={LeftArrowClick} />
      <FaChevronRight className="arrow-right" onClick={RightArrowClick} />
    </div>
  );
};
