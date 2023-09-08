import { GreetingCard } from './components/GreetingCard';
import { UserProfile } from './components/UserProfile';
import { LikeButton } from './components/LikeButton';
import { ToDo } from './components/ToDo';
import iconUser from './utils/icon-user_160.png';
import { ProductsList } from './components/ProductsList';
import { Accordion } from './components/Accordion';
import { CommentList } from './components/CommentList';
import { TabList } from './components/TabList';
import { ThemeProvider } from './components/ThemeProvider';

import './App.css';

const user = {
  name: 'Konrad',
  email: 'konrad@konrad.com',
};

const arrayOfProducts = [
  { name: 'Phone', price: 100, description: 'Samsung S21', id: Math.random() },
  {
    name: 'Tablet',
    price: 300,
    description: 'Samsung GalaxyTab',
    id: Math.random(),
  },
  { name: 'Computer', price: 500, description: 'Optimus', id: Math.random() },
];

const accordionArray = [
  { title: 'click me 1', content: 'show one' },
  { title: 'click me 2', content: 'show two' },
  { title: 'click me 3', content: 'show three' },
];

const commentsArray = [
  {
    userName: 'Ada',
    commentText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    userName: 'Tomek',
    commentText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    userName: 'Agnieszka',
    commentText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
];

function App() {
  return (
    <>
      <p>Ad.1 ##################################################</p>
      <GreetingCard name="Konrad" />
      <p>Ad.2 ##################################################</p>
      <UserProfile src={iconUser} name={user.name} email={user.email} />
      <p>Ad.3 ##################################################</p>
      <LikeButton />
      <p>Ad.4 ##################################################</p>
      <ToDo taskName="Pouczyć się Reacta" />
      <p>Ad.5 ##################################################</p>
      <ProductsList array={arrayOfProducts} />
      <p>Ad.6 ##################################################</p>
      <Accordion array={accordionArray} />
      <p>Ad.7 ##################################################</p>
      <CommentList array={commentsArray} />
      <p>Ad.8 ##################################################</p>
      <TabList />
      <p>Ad.9 ##################################################</p>
      <ThemeProvider>
        <GreetingCard name="Konrad" />
        <ToDo taskName="Pouczyć się Reacta" />
        <p>Test</p>
      </ThemeProvider>
      <p>Ad.10 #################################################</p>
    </>
  );
}

export default App;
