import TextGradient from './components/TextGradient';
import Profile from './employees/create/components/Profile';

const HomePage = () => {
  return (
    <div>
      <>
        <div className='h-screen flex justify-center items-center w-[40rem]'>
          {/* <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <img
              className='mx-auto h-10 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt='Your Company'
            />
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Create User Profofile Account
            </h2>
          </div> */}

          <TextGradient classname='text-4xl lg:text-8xl font-black text-center'>
            Your Gateway to Seamless Productivity
          </TextGradient>

          <div className='border'>
            <form className='space-y-6' action='#' method='POST'>
              <div className='flex gap-5'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <div className='flex items-center justify-between'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      Password
                    </label>
                  </div>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>

              {/* <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Sign in
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </>
    </div>
  );
};
export default HomePage;
