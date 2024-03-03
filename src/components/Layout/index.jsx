import Header from './Header/index';
import Main from './Main/index';

export default function Layout({ children }) {
  return (
    <div className='flex h-full flex-col items-start justify-start'>
      <Header />

      <div className='flex w-full flex-grow items-center justify-center overflow-auto'>
        <Main>{children}</Main>
      </div>
    </div>
  );
}
