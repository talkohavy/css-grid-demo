export default function Example4() {
  return (
    <div className='flex size-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Example 4</h1>

      <div className='w-full space-y-4'>
        <p>
          Using <code className='text-blue-600'>`grid-template-columns`</code> with{' '}
          <code className='text-blue-600'>`repeat`</code> values width.
        </p>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridContainer &#123;
            <br />
            &nbsp;&nbsp; display: grid;
            <br />
            &nbsp;&nbsp; grid-template-columns: repeat(12, 1fr);
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
            gridTemplateColumns: 'repeat(12,1fr)',
            gap: 10,
          }}
        >
          <div className='outline outline-red-500'>1</div>
          <div className='outline outline-red-500'>2</div>
          <div className='outline outline-red-500'>3</div>
          <div className='outline outline-red-500'>4</div>
          <div className='outline outline-red-500'>5</div>
          <div className='outline outline-red-500'>6</div>
          <div className='outline outline-red-500'>7</div>
          <div className='outline outline-red-500'>8</div>
          <div className='outline outline-red-500'>9</div>
          <div className='outline outline-red-500'>10</div>
          <div className='outline outline-red-500'>11</div>
          <div className='outline outline-red-500'>12</div>
          <div className='outline outline-red-500'>Second row A</div>
          <div className='outline outline-red-500'>Second row B</div>
        </div>
      </div>
    </div>
  );
}
