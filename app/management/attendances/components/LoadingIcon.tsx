import Image from 'next/image';

const LoadingIcon = () => {
  return (
    <Image
      className='animate-spin m-2'
      src='https://www.svgrepo.com/show/448500/loading.svg'
      alt='Loading icon'
      width={20}
      height={20}
    />
  );
};
export default LoadingIcon;
