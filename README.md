
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
- [Diagram](#diagram)
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

# Diagram

[Diagram for this project](https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=Log.drawio#R5V3bcuI4EP0aHpOyJUuYx9wmu1WZquykajd5dLAw3jWIMkqAfP3KWAJkOcQTZEtOmIfBja%2FdfbpPtyRnAK9m69s8Wkx%2F0phkA%2BDF6wG8HgAAPIj5f4VkU0qGOCgFSZ7GpcjfCx7SNyKEnpC%2BpDFZKjsySjOWLlThmM7nZMwUWZTndKXuNqGZetVFlBBN8DCOMl36TxqzaSkNkbeX%2F0HSZCqv7Hvil1kkdxaC5TSK6epABG8G8CqnlJXfZusrkhXKk3opj%2Fvxzq%2B7G8vJnDU54Ok1etzcv13ByTj4a32J0evt5mwo7o1t5AOTmD%2B%2F2KQ5m9KEzqPsZi%2B9zOnLPCbFWT2%2Btd%2FnjtIFF%2Fpc%2BC9hbCOMGb0wykVTNsvEr%2FyG881jcfw5kptPh79dr8XJy62N2NKfWChhSV%2FyMTnymNJzojwh7Mh%2BsNyv0MHBBYQ%2BbwmdEX4%2FfIecZBFLX1UfiYSrJbv99tbgX4RBfsM4QNzOa5S9iEv9IlnK4VBntLvomWNPUXSUpcmcfx9zhZGcC15JzlLu3Bfih1kax6VNyTJ9i5635ytUvaDpnG2fB10O0HWt8o85VHEhsq5DqLiIAgJFt%2BKoM%2B%2FcA%2BWRInRIKzZWvjj3ffEsB7vQyWTJvaBqnd0tfN5gvmavO5qk879TstJMpqJoNU0ZeVhEWy9e8VCqGvJdz9f0%2FL4%2B0VDR5kiGsNU%2BrPkyVk0PQhr2WnJv3bu5to7oyf9YT3G0nO72bUFpYWBbaT62HLGhFyoxm6MUfBC3t1v3JE%2B5CoowdGIwDxoGcz9wKppDr3%2FRXHqbmXAehlhBE3QontuB1Tpljwffn%2FaciG%2Ft0VRsKGDaHSRh6J0D9AEK2wecNfYkScceWX%2FOFhmZkcLrnUCXMRx55wEEalICDsHomP8cmOdhnBMyP57u7dAiNLKe4W3XZMOOijLU0zwOepjHTZZlARwhBTNnLkWgoO%2BJvL083hRw1vI4cj6Py1RmII%2FjACKHcHPMYw4McjFmKXUic%2Fs%2BdC1zI8uZu6PEjZsmbsfaqaMeJm6JQAMBx%2FNRqCDGpX4qsJm2ZfUsMrf86YO87Q06yttN8WYNbnon17W8LTm7ARhBtYl1IvcVp4W1JX37CR5rlrvJc5q7kN%2FPQAAcS%2FAjl%2FK711q8CV2PN%2FWp0nPJOu2xr6bWwU5ZB4Q9JF9yxMZE1wR6Q7Ve6cFwtl9rnG%2BLKLf6kDWjHu4j6j0W8BlESZbkYDVT%2F%2FB2ahxn4YTcgpNOhd2Hk7GypkhQI6y29Z0HFNAHFm0grH2kuEW0e9CmP%2B4uBpoAPkQnNu8lC8TqEe2hRSfgvMp%2FYHnESLLRzPZb1f6S5fQ%2FckUzmm%2BPht72Y6gPUBmhH3q22wC%2B3u%2Fadk0ueNTYcCfWQWB3EqOPVKYUQOsa1CO3o8oLQsdUB75Jm8Nvmhz9kensWN%2BiPYPQV3wBhBUbl7cqDjMfwGEPCz5grIXinXsQqh0UcFoG7oCgOlXxtdcwbo5Vt5gs1Gu%2BfjBZk3WfF8oy0lBjsnKaDhortdQ2yTYXcbQobHISuTXBwOBITR3QOo2QWVPT2WnKmqRZdlAHTFDxr65CwNtPcQSdswN5%2BWlJ7cB66QBDlzJCe%2BxNrpP6uKfud8TeAjl6bIu99XD2kfTW78neAmgFq7s5SS5PSWqMb8cYX6A3HnrB%2BKQvGkHisEr4TlyIJ84c1p60A5zqCysftn7uDP1DSM099umfTLuazr4S%2Fauq3T79C77JDPFg2JT%2Bhd3QvyAsnl1xhmG3%2FC%2Fo4fhyYHL2ee%2F4H7K6lOxT%2FK%2BzpWSNAe7Y4k3U044fMjl2jUdmG34dUDx96ONHmpPnaElcIXkBqGYYCKzTDb0xKtX2hXiernnf%2BkqBwKmlAi2u4fcb5gE5BaFtogeBb5noIb0cdZ%2Foyebk9yR6dhp9nQ%2FTNgaredJWD1aAcAWsAegYrHqG7AcfNNYPLCbSj9CJGN3NNOtsNiPSG1i3lCYZ2c0jc4UYgmrzr44Wyv5uJ%2BREWvt93X0hdghwlRDYZ4cYuJRwWmSHo4YJBxsfBT7NPj188a70KTNzgpB8Y5S7rA1bbs996pURlZertcj1mkLPsQFa3NMGHTbWoOPwQyNZkDkMPztDWTv4DT8FP%2BAc%2FNzqj2P3X6V61BuNwA8DOfHJXfhJBzsw1E86T%2BiOwv8iC7pMGT11SL%2FdtV1h5b03uIaah51Sc72u3Or1%2BvI0NTpVE1WX1Pl1ajdUEfHN%2Fd84Kb1%2F%2F5di4M3%2F)


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

The default template uses the browser console as the logging implementation just to illustrate. 
## Implement

### Build your own logging implementation

If you want to implement your own logging, just ensure that the class you build implements these interfaces: `Analytics` or `ErrorAnalytics` or both (to use the same strategy to log normal analytics and errors) :

```bash
# Go to implementation repository
$ cd src/infra/log/implementations
```
 Now create a class that fits your needs.

### Use some third party lib

If you want to use a third party lib, you can use adapter to translate the data inside your application to the data the third party lib needs

```bash
# Go to adapters repository
$ cd src/infra/log/implementations/adapters
```
Create a class that fits your needs using any third party lib.

## Dependency Injection
```bash
# Open the High Order Component
$ code src/presentation/components/hoc/withLog.tsx
```
Here you can compose your error and analytics logging as you want. The example below uses `ConsoleAnalytics` instance to log either the error and the regular analytics.
> Note that you can use more than one logging strategy thanks to Composite Pattern
```javascript
const errorAnalyticsComposite =  new  ErrorAnalyticsComposite([new  ConsoleAnalytics()]);

const analyticsComposite =  new  AnalyticsComposite([new  ConsoleAnalytics()])
```

## Use HOC on demand

Now you just need to wrap your component with the `withLog` HOC, and your component will have the log to invoke.
```javascript
const Home =  withLog(({ log }) => {
	useEffect(() => {
		log.event('screen', { name:  'Home' })
	}, [])

	return <h1>Home</h1>
})
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
