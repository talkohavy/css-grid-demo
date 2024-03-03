export default function Example4() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>• Example 4: grid with repeat</h2>

      <div>
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
        <div className='outline outline-red-300'>Second row A</div>
        <div className='outline outline-red-300'>Second row B</div>
      </div>
    </div>
  );
}
