export default function Example6() {
  return (
    <div className='flex size-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Example 6</h1>

      <div className='w-full space-y-4'>
        <p>
          Using <code className='text-blue-600'>`grid-template-rows`</code> along with{' '}
          <code className='text-blue-600'>`grid-auto-rows`</code>.
        </p>

        <p>
          Notice how when you define a fixed height, along with{' '}
          <code className='text-blue-600'>`grid-template-rows`</code> and{' '}
          <code className='text-blue-600'>`grid-auto-rows`</code>, no stretch is going to happen. The grid container
          will either have a leftover unfilled space, or an overflow will occur.
        </p>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridContainer &#123;
            <br />
            &nbsp;&nbsp; display: grid;
            <br />
            &nbsp;&nbsp; grid-template-columns: repeat(4, 1fr);
            <br />
            &nbsp;&nbsp; grid-template-rows: 40px 60px;
            <br />
            &nbsp;&nbsp; grid-auto-rows: 120px;
            <br />
            &nbsp;&nbsp; gap: 10px;
            <br />
            &nbsp;&nbsp; height: 768px;
            <br />
            &#125;
          </pre>
        </div>

        <div
          className='h-3xl w-full border border-black dark:border-white p-1'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridTemplateRows: '40px 60px',
            gridAutoRows: '420px',
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
          <div className='outline outline-red-500'>13</div>
          <div className='outline outline-red-500'>14</div>
          <div className='outline outline-red-500'>15</div>
          <div className='outline outline-red-500'>16</div>
        </div>
      </div>
    </div>
  );
}
