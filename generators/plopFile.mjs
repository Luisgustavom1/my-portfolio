function generators(plop) {
  plop.setGenerator("basics", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "input",
        name: "as",
        message: "What is the tag of your component?",
      },
      {
        type: "input",
        name: "package",
        message: "What is the package of your component?",
      },
      {
        type: "input",
        name: "path",
        message: "What is the path of your component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/packages/{{package}}/{{path}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
    ],
  });
}

export default generators;
