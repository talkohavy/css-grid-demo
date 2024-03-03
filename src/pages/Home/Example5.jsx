export default function Example5() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>• Example 5: grid with template rows</h2>

      <p>
        Notice how the remaining rows stretch out to fill the remaining space of the grid container. They did not get a
        defined height, so that's why they stretch. The default behavior of grid items is to stretch and fill the parent
        container.
      </p>

      <div className='rounded-lg border border-[#383838] bg-gray-50 p-4'>
        <pre>
          .gridContainer &#123;
          <br />
          &nbsp;&nbsp; display: grid;
          <br />
          &nbsp;&nbsp; grid-template-columns: repeat(4, 1fr);
          <br />
          &nbsp;&nbsp; grid-template-rows: '40px 60px';
          <br />
          &nbsp;&nbsp; gap: 10px;
          <br />
          &#125;
        </pre>
      </div>

      <div
        className='h-96 w-full border border-black p-1'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gridTemplateRows: '40px 60px',
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
