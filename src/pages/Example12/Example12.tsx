import styles from './Example12.module.scss';
import clsx from 'clsx';

export default function Example12() {
  return (
    <div className='flex size-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Example 12</h1>

      <div className='w-full space-y-4'>
        <p>These are all the defaults for the grid display:</p>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridContainer &#123;
            <br />
            &nbsp;&nbsp; display: grid;
            <br />
            &nbsp;&nbsp; justify-content: normal;
            <br />
            &nbsp;&nbsp; align-items: stretch;
            <br />
            &nbsp;&nbsp; grid-template-columns: none;
            <br />
            &nbsp;&nbsp; gap: 0;
            <br />
            &#125;
          </pre>
        </div>

        <div className={clsx('w-full h-md border border-black dark:border-white p-1', styles.gridTemplate)}>
          <div className='outline outline-red-500'>1</div>
          <div className='outline outline-blue-700'>2</div>
          <div className='outline outline-green-600'>3</div>
          <div className='outline outline-purple-600'>4</div>
        </div>
      </div>
    </div>
  );
}
