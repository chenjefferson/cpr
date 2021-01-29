import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <nav>
        <ul className='p-4 flex justify-center md:justify-between align-center space-x-4'>
          <li className='p-4'>
            <a href='https://costplusdrugs.com'>
              <img src={logo} alt='logo' className='h-14 w-auto' />
            </a>
          </li>
          <li>
            <ul className='flex space-x-4'>
              <li className='transition block font-medium py-2 px-4 m-2 text-blue-900 bg-tertiary rounded hover:bg-tertiaryDark shadow-md hidden md:inline'>
                <a href='https://costplusdrugs.com'>About Us</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <main className='w-4/5 mx-auto py-8'>
        <h1 className='text-4xl font-bold text-center pb-6 text-primary'>
          Available Positions
        </h1>
        <p className='pb-4 font-medium lg:text-1xl text-primary'>
          We're planning to introduce a lot more drugs with transparent prices
          later this year, cutting out monopolistic middlemen in the supply
          chain and alleviating pharma drug shortages, particularly for rare and
          orphan disease conditions.
        </p>
        <p className='pb-4 font-medium lg:text-1xl text-primary'>
          We are looking for a few devs (fullstack, frontend, and backend). If
          you are interested, please apply below.
        </p>
        <div className='text-red-700 bg-red-50 border-2 border-red-800 p-4 m-8 rounded-lg flex align-center'>
          <div className='p-2 pr-4 text-xl'>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </div>
          <p>
            THIS WEBSITE IS A SIGN UP DEMO AND IS NOT ASSOCIATED WITH MARK CUBAN
            COST PLUS DRUGS COMPANY. IF YOU ARE INTERESTED IN WORKING AT MARK
            CUBAN COST PLUS DRUGS COMPANY, PLEASE CONTACT ALEX OSHMYANSKY{' '}
            <a
              href='mailto: alex@costplusdrugs.com'
              className='text-blue-800 hover:underline'
            >
              HERE
            </a>
            .
          </p>
        </div>

        <div className='w-full relative float-right bg-white rounded-lg shadow-xl p-8 m-0'>
          <h2 className='text-3xl text-primary font-bold text-center pb-3'>
            Apply
          </h2>
          <p className='text-lg text-center text-gray-600 pb-3'>
            This isn't currently connected to anything. But it could be.
          </p>
          <form className='w-full bg-white rounded p-8 md:flex md:flex-wrap md:justify-between mb-8'>
            <div class='flex flex-col mb-4 md:w-1/2 md:pr-4'>
              <label
                className='mb-2 font-bold text-lg text-primary'
                for='first-name'
              >
                First Name
              </label>
              <input
                className='transition border border-solid py-2 px-3 text-gray-darkest focus:border-4 focus:border-gray-500 placeholder-gray-600 border-gray-200 rounded outline-none'
                type='text'
                id='first-name'
                placeholder='Your First Name'
              />
            </div>
            <div className='flex flex-col mb-4 md:w-1/2 md:pl-2'>
              <label
                className='mb-2 font-bold text-lg text-primary'
                for='last-name'
              >
                Last Name
              </label>
              <input
                className='transition border border-solid py-2 px-3 text-gray-darkest focus:border-4 focus:border-gray-500 placeholder-gray-600 border-gray-200 rounded outline-none'
                type='text'
                id='last-name'
                placeholder='Your Last Name'
              />
            </div>
            <div className='flex flex-col mb-4 md:w-full'>
              <label
                className='mb-2 font-bold text-lg text-primary'
                for='email'
              >
                E-mail
              </label>
              <input
                className='transition border border-solid py-2 px-4 text-gray-darkest focus:border-4 focus:border-gray-500 placeholder-gray-600 border-gray-200 rounded outline-none'
                type='email'
                id='email'
                placeholder='Your E-mail'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label
                className='mb-2 font-bold text-lg text-gray-darkest md:hidden'
                for='resume'
              >
                Resume
              </label>
              <label
                className='transition block bg-tertiary hover:bg-tertiaryDark text-white cursor-pointer text-lg mx-auto md:ml-0 py-2 px-3 rounded shadow-md'
                for='resume'
              >
                Upload<span className='hidden md:inline'> Resume</span>
              </label>
              <input className='absolute invisible' type='file' id='resume' />
            </div>
            <div className='flex flex-col pb-4'>
              <label
                className='mb-2 font-bold text-lg text-gray-darkest md:hidden'
                for='cover-letter'
              >
                Cover Letter
              </label>
              <label
                className='transition block bg-tertiary hover:bg-tertiaryDark text-white cursor-pointer text-lg mx-auto md:ml-0 py-2 px-3 rounded shadow-md'
                for='cover-letter'
              >
                Upload<span className='hidden md:inline'> Cover Letter</span>
              </label>
              <input
                className='absolute invisible'
                id='cover-letter'
                type='file'
              />
            </div>
            <div className=''>
              <input
                className='transition block bg-green-500 hover:bg-green-600 cursor-pointer text-white text-lg mx-auto md:ml-0 px-4 py-2 rounded font-medium shadow-md'
                type='submit'
                value='Submit'
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
