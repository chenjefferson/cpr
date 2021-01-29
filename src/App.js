import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul className='p-4 flex justify-between align-center space-x-4'>
          <li className='p-4 text-blue-900'>Logo</li>
          <li>
            <ul className='flex space-x-4'>
              <li className='p-4 text-blue-900'>Home</li>
              <li className='p-4 text-blue-900'>Contact Us</li>
            </ul>
          </li>
        </ul>
      </nav>

      <main className='w-4/5 mx-auto py-8'>
        <h1 className='text-4xl font-bold text-center pb-6 text-blue-900'>
          Available Positions
        </h1>
        <p className='pb-4 lg:text-1xl text-blue-900'>
          We're planning to introduce a lot more drugs with transparent prices
          later this year, cutting out monopolistic middlemen in the supply
          chain and alleviating pharma drug shortages, particularly for rare and
          orphan disease conditions.
        </p>
        <p className='pb-4 lg:text-1xl text-blue-900'>
          We are looking for a few devs (fullstack, frontend, and backend). If
          you are interested, please apply below.
        </p>
        <p className='pb-4 text-red-700 bg-red-50 border-2 border-red-800 p-4 m-8'>
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

        <div className='bg-white rounded shadow-lg p-8'>
          <h2 className='text-3xl font-bold text-center pb-3 uppercase'>
            Apply
          </h2>
          <p className='text-lg text-center text-gray-600 pb-3'>
            This isn't currently connected to anything. But it could be.
          </p>
          <form className='w-full bg-white rounded p-8 md:flex md:flex-wrap md:justify-between'>
            <div class='flex flex-col mb-4 md:w-1/2 md:pr-4'>
              <label
                className='mb-2 font-bold text-lg text-gray-darkest uppercase'
                for='first-name'
              >
                First Name
              </label>
              <input
                className='border py-2 px-3 text-gray-darkest focus:border-4 focus:border-blue-500'
                type='text'
                id='first-name'
                placeholder='Your First Name'
              />
            </div>
            <div className='flex flex-col mb-4 md:w-1/2 md:pl-2'>
              <label
                className='mb-2 font-bold text-lg text-gray-darkest uppercase'
                for='last-name'
              >
                Last Name
              </label>
              <input
                className='border py-2 px-3 text-gray-darkest focus:border-4 focus:border-blue-500'
                type='text'
                id='last-name'
                placeholder='Your Last Name'
              />
            </div>
            <div className='flex flex-col mb-4 md:w-full'>
              <label
                className='mb-2 font-bold text-lg text-gray-darkest uppercase'
                for='email'
              >
                E-mail
              </label>
              <input
                className='border py-2 px-4 text-gray-darkest focus:border-4 focus:border-blue-500'
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
                className='transition block bg-blue-500 hover:bg-blue-700 text-white text-lg mx-auto md:ml-0 py-2 px-3 rounded'
                for='resume'
              >
                Upload Resume
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
                className='transition block bg-blue-500 hover:bg-blue-700 text-white text-lg mx-auto md:ml-0 py-2 px-3 rounded'
                for='cover-letter'
              >
                Upload Cover Letter
              </label>
              <input
                className='absolute invisible'
                id='cover-letter'
                type='file'
              />
            </div>
            <div className=''>
              <input
                className='transition block bg-green-500 hover:bg-green-700 text-white text-lg mx-auto md:ml-0 px-4 py-2 rounded font-medium'
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
