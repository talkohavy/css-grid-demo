export default function Example10() {
  return (
    <div className='flex size-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Example 10</h1>

      <div className='w-full space-y-4'>
        <p>
          An easy way to center a div using grid is by using the <code className='text-blue-600'>`place-content`</code>{' '}
          attribute, and setting it to <span className='text-orange-400'>center</span>. This is an alternative to
          display flex, justify-content center, and align-items center.
        </p>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridContainer &#123;
            <br />
            &nbsp;&nbsp; display: grid;
            <br />
            &nbsp;&nbsp; place-content: center;
            <br />
            &#125;
          </pre>
        </div>

        <div
          className='w-full border border-black dark:border-white p-1'
          style={{
            display: 'grid',
            placeContent: 'center',
            height: 300,
          }}
        >
          <div className='size-44 outline outline-red-500'>1</div>
        </div>
      </div>
    </div>
  );
}
