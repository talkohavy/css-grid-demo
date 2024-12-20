export default function Example7() {
  return (
    <div className='flex size-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Example 7</h1>

      <div className='w-full space-y-4'>
        <p>
          Using <code className='text-blue-600'>`grid-row-gap`</code> and{' '}
          <code className='text-blue-600'>`grid-column-gap`</code>.
        </p>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridContainer &#123;
            <br />
            &nbsp;&nbsp; display: grid;
            <br />
            &nbsp;&nbsp; grid-template-columns: repeat(4, 1fr);
            <br />
            &nbsp;&nbsp; grid-auto-rows: 120px;
            <br />
            &nbsp;&nbsp; grid-row-gap: 40px;
            <br />
            &nbsp;&nbsp; grid-column-gap: 60px;
            <br />
            &#125;
          </pre>
        </div>

        <div
          className='w-full border border-black dark:border-white p-1'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridAutoRows: 120,
            rowGap: 40,
            columnGap: 60,
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
