export default function Example6() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>• Example 6: grid with `grid-auto-rows`</h2>

      <p>
        Notice how when you define a fixed height, no stretch is going to happen. The grid container will either have a
        leftover unfilled space, or an overflow will occur.
      </p>

      <div className='rounded-lg border border-[#383838] bg-gray-50 p-4'>
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
          &#125;
        </pre>
      </div>

      <div
        className='h-3xl w-full border border-black p-1'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gridTemplateRows: '40px 60px',
          gridAutoRows: '120px',
          gap: 10,
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
