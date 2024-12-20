export default function Example8() {
  return (
    <div className='flex size-full flex-col items-start justify-start gap-10 overflow-auto p-8 dark:text-white'>
      <h1 className='text-3xl font-bold'>Example 8</h1>

      <div className='w-full space-y-4'>
        <p>
          Using <code className='text-blue-600'>`grid-column-start`</code> and{' '}
          <code className='text-blue-600'>`grid-column-end`</code>.
        </p>

        <p>
          In a grid with 2 columns, there are 3 lines. Counting starts from 1, not 0. This means that in a grid with 2
          columns, 1 is the first line, and 3 is the last line. It can be a bit confusing seeing 3, a number that is
          higher then the number of columns, but just remember - the last line is the columns count +1. The best
          alternative is to put -1 to note "last line of grid", instead of giving the column count + 1.
        </p>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridContainer &#123;
            <br />
            &nbsp;&nbsp; display: grid;
            <br />
            &nbsp;&nbsp; grid-template-columns: repeat(4, 1fr);
            <br />
            &nbsp;&nbsp; gap: 10px;
            <br />
            &#125;
          </pre>
        </div>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridItem1 &#123;
            <br />
            &nbsp;&nbsp; grid-column-start: 1;
            <br />
            &nbsp;&nbsp; grid-column-end: -1;
            <br />
            &#125;
          </pre>
        </div>

        <div className='rounded-lg border border-[#383838] p-4'>
          <pre>
            .gridItem2 &#123;
            <br />
            &nbsp;&nbsp; grid-column-start: 2;
            <br />
            &nbsp;&nbsp; grid-column-end: 4;
            <br />
            &#125;
          </pre>
        </div>

        <div
          className='w-full border border-black dark:border-white p-1'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridAutoRows: '120px',
            rowGap: 10,
            columnGap: 20,
          }}
        >
          <div
            className='col-start-1 outline outline-red-500'
            style={{
              // gridColumn: '2 / -2',
              gridColumnStart: 1,
              gridColumnEnd: -1,
            }}
          >
            1
          </div>
          <div className='col-start-2 col-end-4 outline outline-red-500'>2</div>
          <div className='outline outline-red-500'>3</div>
          <div className='outline outline-red-500'>4</div>
          <div className='col-start-2 col-end-5 outline outline-red-500'>5</div>
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
