import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul className='p-4 flex justify-between align-center space-x-4'>
          <li className='p-4'>Logo</li>
          <li>
            <ul className='flex space-x-4'>
              <li className='p-4'>Home</li>
              <li className='p-4'>Contact Us</li>
            </ul>
          </li>
        </ul>
      </nav>

      <main className='w-4/5 mx-auto py-8'>
        <h1 className='text-4xl font-bold text-center pb-6'>
          Available Positions
        </h1>
        <p className='pb-4'>
          We're planning to introduce a lot more drugs with transparent prices
          later this year, cutting out monopolistic middlemen in the supply
          chain and alleviating pharma drug shortages, particularly for rare and
          orphan disease conditions.
        </p>
        <p className='pb-4'>
          We are looking for a few devs (fullstack, frontend, and backend). If
          you are interested, please apply below.
        </p>
        <p className='pb-4'>
          THIS WEBSITE IS A SIGN UP DEMO AND IS NOT ASSOCIATED WITH MARK CUBAN
          COST PLUS DRUGS COMPANY. IF YOU ARE INTERESTED IN WORKING AT MARK
          CUBAN COST PLUS DRUGS COMPANY, PLEASE CONTACT ALEX OSHMYANSKY{' '}
          <a href='mailto: alex@costplusdrugs.com'>HERE</a>.
        </p>

        <h2 className='text-3xl font-bold text-center pb-6'>Apply</h2>
        <form>
          <label for='resume'>Resume</label>
          <input type='file' id='resume' />
          <label for='first-name'>First Name</label>
          <input type='text' id='first-name' placeholder='Your First Name' />
          <label for='last-name'>Last Name</label>
          <input type='text' id='last-name' placeholder='Your Last Name' />
          <label for='emial'>E-mail</label>
          <input type='text' id='email' placeholder='Your E-mail' />
          <label for='cover-letter'>Cover Letter</label>
          <input type='file' />
          <input type='submit' value='Submit' />
        </form>
      </main>
    </div>
  );
}

export default App;
