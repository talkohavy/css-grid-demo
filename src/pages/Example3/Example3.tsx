export default function Example3() {
  return (
    <div className='flex size-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Example 3</h1>

      <div className='w-full space-y-4'>
        <p>
          Using <code className='text-blue-600'>`grid-template-columns`</code> with{' '}
          <code className='text-blue-600'>`fr`</code> values width.
        </p>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridContainer &#123;
            <br />
            &nbsp;&nbsp; display: grid;
            <br />
            &nbsp;&nbsp; grid-template-columns: 2fr 1fr;
            <br />
            &nbsp;&nbsp; gap: 10px;
            <br />
            &#125;
          </pre>
        </div>

        <div
          className='h-32 w-full border border-black dark:border-white p-1'
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 10,
          }}
        >
          <div className='outline outline-red-500'>I am the first column</div>
          <div className='outline outline-red-500'>I am the second column</div>
          <div className='outline outline-red-500'>Second row A</div>
          <div className='outline outline-red-500'>Second row B</div>
        </div>
      </div>
    </div>
  );
}
