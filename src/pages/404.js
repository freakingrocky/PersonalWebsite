import React from "react"
// import { Link } from "gatsby"
import styled from '@emotion/styled'
import SVG from "../@lekoarts/gatsby-theme-cara/components/svg"
import { UpDown, UpDownWide } from "../@lekoarts/gatsby-theme-cara/styles/animations"


// const Btn = styled.button`
// padding: 14px 40px;
// display: inline-block;
// background-color: #f44336;
// color: #ffffff;
// font-weight: 900;
// font-size: 20px;
// border: none;
// border-radius: 12px;
// box-shadow: 2px 12px 16px 2px rgba(223,100,80,0.24), 2px 17px 50px 2px rgba(223,100,80,0.19);
// width: 80%;
// `

const Heading = styled.h1`
color: 	#df7f42;
font-size: 60px;
padding-top: 120px;`

const NotFound = () => (
        <div>
            <UpDown>
                <SVG icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
                <SVG icon="hexa" width={48} stroke color="icon_red" left="60%" top="75%" />
                <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
                <SVG icon="circle" width={24} color="icon_green" left="80%" top="5%" />
                <SVG icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="75%" />
                <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
                <SVG icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
                <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="75%" />
                <SVG icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="75%" />
                <SVG icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
            </UpDown>
            <UpDownWide>
                <SVG icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="90%" top="10%" />
                <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
                <SVG icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="75%" />
                <SVG icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
                <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
                <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
                <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
                <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
                <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
                <SVG icon="hexa" width={8} stroke color="icon_darker" left="80%" top="75%" />
            </UpDownWide>
            <center>
                <Heading>This Page Does Not Exist!</Heading>
            </center>
        </div>
)

export default NotFound