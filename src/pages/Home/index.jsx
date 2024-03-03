import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
import Example5 from './Example5';

export default function HomePage() {
  return (
    <div className='flex h-full w-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Grid Demo</h1>

      <Example1 />

      <Example2 />

      <Example3 />

      <Example4 />

      <Example5 />
    </div>
  );
}
