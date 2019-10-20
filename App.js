import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BooksScreen from './components/BooksScreen';
import BookDetailScreen from './components/BookDetailScreen';
import AddBookScreen from './components/AddBookScreen';
import EditBookScreen from './components/EditBookScreen';

const MainNavigator = createStackNavigator({
  Book: { screen: BooksScreen },
  BookDetails: { screen: BookDetailScreen },
  AddBook: { screen: AddBookScreen },
  EditBook: { screen: EditBookScreen },
});

const App = createAppContainer(MainNavigator);
export default App;
