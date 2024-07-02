import React from 'react'
import './nav.css'
import { BiHome } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";

const nav = () => {
  return (
  <nav>
    <a href='#' className='active'><BiHome /></a>
    <a href='#about'><GoPerson /></a>
    <a href='#projects'><BsPersonWorkspace /></a>
    <a href='#skills'><FaSitemap /></a>
    <a href='#contacts'><MdOutlinePermPhoneMsg /></a>
  </nav>
  )
}

export default nav