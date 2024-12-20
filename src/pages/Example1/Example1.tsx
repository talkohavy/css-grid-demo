export default function Example1() {
  return (
    <div className='flex size-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Example 1</h1>

      <div className='w-full space-y-4'>
        <p>
          Using <code className='text-blue-600'>`grid-template-columns`</code> with{' '}
          <code className='text-blue-600'>`px`</code> values width.
        </p>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridContainer &#123;
            <br />
            &nbsp;&nbsp; display: grid;
            <br />
            &nbsp;&nbsp; grid-template-columns: 200px 100px;
            <br />
            &#125;
          </pre>
        </div>

        <div
          className='h-32 w-full border border-black dark:border-white p-1'
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 100px',
          }}
        >
          <div className='outline outline-red-500'>I am the first column</div>
          <div className='outline outline-red-500'>I am the second column</div>
          <div className='outline outline-red-500'>I am again on the first column</div>
        </div>
      </div>
    </div>
  );
}
