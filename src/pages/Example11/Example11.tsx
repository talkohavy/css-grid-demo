import styles from './Example11.module.scss';
import clsx from 'clsx';

export default function Example11() {
  return (
    <div className='flex size-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Example 11</h1>

      <div className='w-full space-y-4'>
        <p>
          Using <code className='text-blue-600'>`grid-template-areas`</code> on the parent, and{' '}
          <span className='text-orange-400'>`grid-area`</span> on the child to create patterns.
        </p>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridContainer &#123;
            <br />
            &nbsp;&nbsp; display: grid;
            <br />
            &nbsp;&nbsp; gap: 24px;
            <br />
            &nbsp;&nbsp;{' '}
            {`grid-template-areas:
     'header header header'
     'sidebar main main'
     'sidebar main main'
     'footer footer footer'`}
            ;
            <br />
            &#125;
          </pre>
        </div>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .item1 &#123;
            <br />
            &nbsp;&nbsp; grid-area: 'header';
            <br />
            &#125;
          </pre>
        </div>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .item2 &#123;
            <br />
            &nbsp;&nbsp; grid-area: 'sidebar';
            <br />
            &#125;
          </pre>
        </div>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .item3 &#123;
            <br />
            &nbsp;&nbsp; grid-area: 'main';
            <br />
            &#125;
          </pre>
        </div>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .item4 &#123;
            <br />
            &nbsp;&nbsp; grid-area: 'footer';
            <br />
            &#125;
          </pre>
        </div>

        <div className={clsx('w-full h-md border border-black dark:border-white p-1', styles.gridTemplate)}>
          <div className='outline outline-red-500' style={{ gridArea: 'header' }}>
            header
          </div>
          <div className='outline outline-blue-700' style={{ gridArea: 'sidebar' }}>
            sidebar
          </div>
          <div className='outline outline-green-600' style={{ gridArea: 'main' }}>
            main
          </div>
          <div className='outline outline-purple-600' style={{ gridArea: 'footer' }}>
            footer
          </div>
        </div>
      </div>
    </div>
  );
}
