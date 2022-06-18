import React from "react";
// import { Button , ButtonGroup, styled } from '@chakra-ui/react'
import styled from "styled-components";
import styles from "./button.module.css"


const  Button_data=()=>{
   
    const Button = styled.button`
    /* Adapt the colors based on primary prop */
  
    backgroundcolor: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    // border: 2px solid palevioletred;
    bgcolor:transparent
    border-radius: 3px;
    // border:none

  `;
    return(<div className={styles.divclass}>
   <Button className={styles.primary}>Primary Button</Button>
    <Button className={styles.default}>Default Button</Button>
    <Button className={styles.dashed}>Dashed Button</Button>
    <Button className={styles.text} >Text Button</Button>
    <Button className={styles.link}>Link Button</Button>
   </div>)

   
}
export default Button_data