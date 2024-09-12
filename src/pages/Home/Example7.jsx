export default function Example7() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>• Example 7: grid with `gap`, `grid-row-gap` & `grid-column-gap`</h2>

      <div className='rounded-lg border border-[#383838] bg-gray-50 p-4'>
        <pre>
          .gridContainer &#123;
          <br />
          &nbsp;&nbsp; display: grid;
          <br />
          &nbsp;&nbsp; grid-template-columns: repeat(4, 1fr);
          <br />
          &nbsp;&nbsp; grid-auto-rows: 120px;
          <br />
          &nbsp;&nbsp; grid-row-gap: 10px;
          <br />
          &nbsp;&nbsp; grid-column-gap: 20px;
          <br />
          &#125;
        </pre>
      </div>

      <div
        className='w-full border border-black p-1'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gridAutoRows: 120,
          rowGap: 10,
          columnGap: 20,
        }}
      >
        <div className='outline outline-red-300'>1</div>
        <div className='outline outline-red-300'>2</div>
        <div className='outline outline-red-300'>3</div>
        <div className='outline outline-red-300'>4</div>
        <div className='outline outline-red-300'>5</div>
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
