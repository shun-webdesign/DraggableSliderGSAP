import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const pictures = [
  {
    source:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    content: {
      date: "04.29.2020",
      desc: "Behind the leaves. ",
      link: "https://www.google.com/"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    content: {
      date: "04.28.2020",
      desc: "Minimal eucalyptus leaves",
      link: "https://www.google.com/"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
    content: {
      date: "04.28.2020",
      desc: "Rubber Plant",
      link: "https://www.google.com/"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1506543277633-99deabfcd722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=623&q=80",
    content: {
      date: "04.27.2020",
      desc: "Person holding leaf plant",
      link: "https://www.google.com/"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    content: {
      date: "04.23.2020",
      desc: "Green leafed plant photography",
      link: "https://www.google.com/"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    content: {
      date: "04.21.2020",
      desc: "Gree leafed plant in focus photography",
      link: "https://www.google.com/"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    content: {
      date: "04.23.2020",
      desc: "I took the shot at home with Sigma 105 mm",
      link: "https://www.google.com/"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: {
      date: "04.21.2020",
      desc: "Cheese plant leaf in clear glass vase",
      link: "https://www.google.com/"
    }
  }
];

const Slide = ({ imageSource, content }) => {
  return (
    <div className="slide">
      <a href={content.link}>
        <div className="preview">
          <img src={imageSource} alt="The Plant" draggable="false" />
        </div>

        <div className="infos">
          <h3>{content.date}</h3>
          <h2>{content.desc}</h2>
        </div>
      </a>
    </div>
  );
};

export const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(sliderRef.current.clientWidth, sliderRef.current.innerWidth);
    Draggable.create(sliderRef.current, {
      type: "x",
      throwProps: true,
      bounds: {
        minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
        maxX: 0
      },
      throwResistance: 1
    });
  }, []);

  return (
    <div id="slider" className="slider" ref={sliderRef}>
      {pictures.map((item, index) => {
        return (
          <Slide key={index} imageSource={item.source} content={item.content} />
        );
      })}
    </div>
  );
};
