export const Skills = () => {
  const skillsArr = [
    {
      id: 1,
      skill: "ReactJS",
      logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
    },
    {
      id: 2,
      skill: "JavaScript",
      logo: "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg",
    },
    {
      id: 3,
      skill: "HTML",
      logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
    },
    {
      id: 4,
      skill: "CSS",
      logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg",
    },
    {
      id: 5,
      skill: "Typescript",
      logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg",
    },
    {
      id: 6,
      skill: "React Router",
      logo: "https://www.vectorlogo.zone/logos/reactrouter/reactrouter-ar21.svg",
    },
    {
      id: 7,
      skill: "Redux",
      logo: "https://www.vectorlogo.zone/logos/js_redux/js_redux-ar21.svg",
    },
    {
      id: 8,
      skill: "Git",
      logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg",
    },
    {
      id: 9,
      skill: "Github",
      logo: "https://www.vectorlogo.zone/logos/github/github-ar21.svg",
    },
  ];
  return (
    <>
      <div className="h-[80vh] bg-teal-50 rounded-xl flex flex-col gap-20 justify-center items-center">
        <h1 className="text-5xl font-bold text-teal-600">
          {" "}
          Tools and Technologies{" "}
        </h1>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {skillsArr?.map(({ id, skill, logo }) => (
            <div key={id}>
              <img className="w-40 h-30" src={logo} alt={skill} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
