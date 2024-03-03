export default function Example8() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>
        • Example 8: grid with `grid-column-start`, `grid-row-gap` & `grid-column-end`
      </h2>

      <div className='rounded-lg border border-[#383838] bg-gray-50 p-4'>
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

      <div className='rounded-lg border border-[#383838] bg-gray-50 p-4'>
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

      <div
        className='w-full border border-black p-1'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gridAutoRows: '120px',
          rowGap: 10,
          columnGap: 20,
        }}
      >
        <div
          className='col-start-1 outline outline-red-300'
          style={{
            gridColumnEnd: -1,
          }}
        >
          1
        </div>
        <div className='col-start-2 col-end-4 outline outline-red-300'>2</div>
        <div className='outline outline-red-300'>3</div>
        <div className='outline outline-red-300'>4</div>
        <div className='col-start-2 col-end-5 outline outline-red-300'>5</div>
        <div className='outline outline-red-300'>6</div>
        <div className='outline outline-red-300'>7</div>
        <div className='outline outline-red-300'>8</div>
        <div className='outline outline-red-300'>9</div>
        <div className='outline outline-red-300'>10</div>
        <div className='outline outline-red-300'>11</div>
        <div className='outline outline-red-300'>12</div>
        <div className='outline outline-red-300'>13</div>
        <div className='outline outline-red-300'>14</div>
        <div className='outline outline-red-300'>15</div>
        <div className='outline outline-red-300'>16</div>
      </div>
    </div>
  );
}
