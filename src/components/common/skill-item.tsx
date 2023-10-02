import { Skill } from "@/interfaces";
import Image from "next/image";
import React from "react";

export const SkillItem = ({ item }: { item: Skill }) => {
  return (
    <div className='flex justify-center items-center flex-col w-60 h-60 bg-primary-light p-8 rounded-xl'>
      <Image
        alt='react'
        src={`/images/logos/${item.icon}`}
        height={150}
        width={150}
      ></Image>
      <h4 className='text-lg mt-2 font-medium text-text-color-2'>
        {item.title}
      </h4>
    </div>
  );
};
