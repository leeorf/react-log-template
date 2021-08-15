<div align="center" >
  <h1>React Log Template</h1>
  <div>
    <img src="https://img.shields.io/badge/repository%20category-project-green" />
  </div>
  <br>
  <div>
    <a href="https://github.com/leeorf">
      <img src="https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/leeorf">
    </a>
    <a href="https://www.linkedin.com/in/leonardorodriguesf/">
      <img src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardof/">
    </a>
    <a href="mailto:leorodrigues@leeorf.dev">
      <img src="https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leorodrigues@leeorf.dev">
    </a>
  </div>
  <div>
	  <p>Decoupled log template for react apps</p>
  </div>
</div>


# Table of contents

- [Overview](#overview)
- [How to use](#how-to-use)
- [How to contribute](#how-to-contribute)
- [Author](#author)
- [License](#license)
- [Reference](#reference)



# Overview

Implement your own front end logging or pick any third party library. Call them anywhere and any time you want.

This project was built inspired by this excelent video, by [rmanguinho (Rodrigo Manguinho) (github.com)](https://github.com/rmanguinho):

[#3 SOLID Principles & Design Patterns - YouTube](https://www.youtube.com/watch?v=lqYm2V6J7Gk&list=PL9aKtVrF05DxhLuX2vg8p87H9K0tNyS8j&index=4)

To keep component as loosely coupled as possible, this template uses:

- Design Patterns
  - [Adapter (refactoring.guru)](https://refactoring.guru/design-patterns/adapter)
  - [Strategy (refactoring.guru)](https://refactoring.guru/design-patterns/strategy)
  - [Composite (refactoring.guru)](https://refactoring.guru/design-patterns/composite)

- React
  - [Higher-Order Components – React (reactjs.org)](https://reactjs.org/docs/higher-order-components.html)

# How to use

To clone and run this application you need [Git](https://git-scm.com/), [Node.js v14 or higher](https://nodejs.org/)  and [Yarn](https://yarnpkg.com/). From your command line, you need :

``` bash
# Clone this repository
$ git clone https://github.com/leeorf/react-log-template.git

# Go to directory
$ cd react-log-template

# Install the dependencies
$ yarn

# Start the client in development mode
$ yarn dev
```

The default template uses the browser console as the logging implementation just to illustrate. You can:

### Build your own logging implementation

If you want to implement your own logging, just ensure that the class you build implements `Analytics` and/or `ErrorAnalytics` interfaces:

```bash
# Go to implementation repository
$ touch src/infra/log/implementations

# Create a class that fits your needs

```

### Use some third party lib

If you want to use a third party lib, you can use adapter to translate the data inside your application to the data the third party lib needs

```bash
# Go to adapters repository
$ touch src/infra/log/implementations/adapters

# Create a class that fits your needs using any third party lib
```

# How to contribute

Have you seen any mistake, or want to contribute? Feel free to open an issue or to contribute.

1. Fork this repository
2. Create a branch with the name of your feature. I would be glad if you follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
3. Commits changes to your own branch
4. Push your work back up to your fork
5. Submit a Pull request from your fork to this repository
6. After the Pull request is merged, you can delete your branch

# Author

**Leonardo Rodrigues**

*Let's connect!* 
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/leeorf)](https://github.com/leeorf)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardof/)](https://www.linkedin.com/in/leonardorodriguesf/)

# License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

# Reference

[#3 SOLID Principles & Design Patterns - YouTube](https://www.youtube.com/watch?v=lqYm2V6J7Gk&list=PL9aKtVrF05DxhLuX2vg8p87H9K0tNyS8j&index=4)
