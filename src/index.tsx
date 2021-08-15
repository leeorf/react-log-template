import ReactDOM from 'react-dom'
import '../src/presentation/styles/global.css'
import { Router } from './main/routes/router'

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
