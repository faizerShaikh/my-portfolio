import React from "react";
import { WindowCard } from "./common";

export const HeroSection = () => {
  return (
    <section className='flex justify-between items-center my-[8rem]'>
      <div className='flex flex-col justify-center w-1/2'>
        <h1 className='text-6xl text-text-color-2'>
          Hello World<span className='text-code-4'>!</span>
          <br />I<span className='text-code-3'>'</span>am Faizer Shaikh
        </h1>
        <p className='mt-2'>
          As a software developer who enjoys creating engaging experiences my
          focus is, on developing cutting edge and user solutions. At the moment
          I am particularly interested, in designing people centered products at
          <a
            href='https://apsissolutions.com/'
            target='_blank'
            referrerPolicy='no-referrer'
            className='text-code-1 font-medium'
          >
            {" "}
            Apsis Solutions.
          </a>
        </p>
      </div>
      <WindowCard>
        <div className='flex justify-start items-center'>
          <div className='w-[60px]'>1</div>
          <div>{"<Stack>"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[90px]'>2</div>
          <div className='text-code-3'>{"<JavaScript />"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[90px]'>3</div>
          <div className='text-code-1'>{"<Frontend>"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[120px]'>4</div>
          <div className='text-code-5'>{"<Angular />"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[120px]'>5</div>
          <div className='text-neutral-300'>{"<NextJS />"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[120px]'>6</div>
          <div className='text-cyan-400'>{"<ReactJS />"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[90px]'>7</div>
          <div className='text-code-1'>{"</Frontend>"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[90px]'>8</div>
          <div className='text-code-1'>{"<Backend>"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[120px]'>9</div>
          <div className='text-code-5'>{"<Node.js />"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[120px]'>10</div>
          <div className='text-neutral-300'>{"<Nest.js />"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[120px]'>11</div>
          <div className='text-cyan-400'>{"<Express.js />"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[90px]'>12</div>
          <div className='text-code-1'>{"</Backend>"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[90px]'>13</div>
          <div className='text-code-3'>{"<TypeScript />"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[90px]'>14</div>
          <div className='text-code-3'>{"{...otherTechnologies}"}</div>
        </div>
        <div className='flex justify-start items-center'>
          <div className='w-[60px]'>15</div>
          <div>{"</Stack>"}</div>
        </div>
      </WindowCard>
    </section>
  );
};
