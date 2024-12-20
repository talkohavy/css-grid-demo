export default function Example2() {
  return (
    <div className='flex size-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Example 2</h1>

      <div className='w-full space-y-4'>
        <p>
          Using <code className='text-blue-600'>`gap`</code>
        </p>

        <div className='rounded-lg border border-[#383838] bg-gray-50 p-4'>
          <pre>
            .gridContainer &#123;
            <br />
            &nbsp;&nbsp; display: grid;
            <br />
            &nbsp;&nbsp; grid-template-columns: 200px 100px;
            <br />
            &nbsp;&nbsp; gap: 10px;
            <br />
            &#125;
          </pre>
        </div>

        <div
          className='h-32 w-full border border-black p-1'
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 100px',
            gap: 10,
          }}
        >
          <div className='outline outline-red-300'>I am the first column</div>
          <div className='outline outline-red-300'>I am the second column</div>
          <div className='outline outline-red-300'>Second row A</div>
          <div className='outline outline-red-300'>Second row B</div>
        </div>
      </div>
    </div>
  );
}
