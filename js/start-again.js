import showScreen from './show-screen';
import greeting from './screens/greeting';

const backLinkHandler = (event) => {
  event.preventDefault();
  showScreen(greeting);
};

export default backLinkHandler;
