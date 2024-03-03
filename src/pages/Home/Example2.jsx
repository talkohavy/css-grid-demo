export default function Example2() {
  return (
    <div className='w-full space-y-4'>
      <h2 className='text-xl font-bold'>• Example 2: grid with 2 columns and gaps</h2>

      <div>
        <pre>
          .gridContainer &#123;
          <br />
          &nbsp;&nbsp; display: grid;
          <br />
          &nbsp;&nbsp; grid-template-columns: 200px 100px;
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
          gridTemplateColumns: '200px 100px',
          gap: 10,
        }}
      >
        <div className='outline outline-red-300'>I am the first column</div>
        <div className='outline outline-red-300'>I am the second column</div>
        <div className='outline outline-red-300'>Second row A</div>
        <div className='outline outline-red-300'>Second row B</div>
      </div>
    </div>
  );
}
