import React from 'react';
import styled, { keyframes } from 'styled-components'

const circle = keyframes`
0 % {
    opacity: 1;
    backface- visibility: hidden;
transform: translateZ(0) scale(1.5,1.5);
} 100% {
opacity: 0;
backface-visibility: hidden;
transform: translateZ(0) scale(1,1);
}
`

const Root = styled.div`
.ldio-l5qu7awpkb div > div {
    position: absolute;
width: 24px;
height: 24px;
border-radius: 50%;
background:black;
animation: ${circle} 1s linear infinite;
}.ldio-l5qu7awpkb div:nth-child(1) > div {
    left: 148px;
top: 88px;
animation-delay: -0.875s;
}
.ldio-l5qu7awpkb > div:nth-child(1) {
    transform: rotate(0deg);
transform-origin: 160px 100px;
}.ldio-l5qu7awpkb div:nth-child(2) > div {
    left: 130px;
top: 130px;
animation-delay: -0.75s;
}
.ldio-l5qu7awpkb > div:nth-child(2) {
    transform: rotate(45deg);
transform-origin: 142px 142px;
}.ldio-l5qu7awpkb div:nth-child(3) > div {
    left: 88px;
top: 148px;
animation-delay: -0.625s;
}
.ldio-l5qu7awpkb > div:nth-child(3) {
    transform: rotate(90deg);
transform-origin: 100px 160px;
}.ldio-l5qu7awpkb div:nth-child(4) > div {
    left: 46px;
top: 130px;
animation-delay: -0.5s;
}
.ldio-l5qu7awpkb > div:nth-child(4) {
    transform: rotate(135deg);
transform-origin: 58px 142px;
}.ldio-l5qu7awpkb div:nth-child(5) > div {
    left: 28px;
top: 88px;
animation-delay: -0.375s;
}
.ldio-l5qu7awpkb > div:nth-child(5) {
    transform: rotate(180deg);
transform-origin: 40px 100px;
}.ldio-l5qu7awpkb div:nth-child(6) > div {
    left: 46px;
top: 46px;
animation-delay: -0.25s;
}
.ldio-l5qu7awpkb > div:nth-child(6) {
    transform: rotate(225deg);
transform-origin: 58px 58px;
}.ldio-l5qu7awpkb div:nth-child(7) > div {
    left: 88px;
top: 28px;
animation-delay: -0.125s;
}
.ldio-l5qu7awpkb > div:nth-child(7) {
    transform: rotate(270deg);
transform-origin: 100px 40px;
}.ldio-l5qu7awpkb div:nth-child(8) > div {
    left: 130px;
top: 46px;
animation-delay: 0s;
}
.ldio-l5qu7awpkb > div:nth-child(8) {
    transform: rotate(315deg);
transform-origin: 142px 58px;
}
.loadingio-spinner-spin-obbqbqd8oh {
    width: 200px;
height: 200px;
display: inline-block;
overflow: hidden;
background: #ffffff;
}
.ldio-l5qu7awpkb {
    width: 100%;
height: 100%;
position: relative;
transform: translateZ(0) scale(1);
backface-visibility: hidden;
transform-origin: 0 0; /* see note above */
}
.ldio-l5qu7awpkb div {box - sizing: content-box; }
`


function LoadingIndicator() {
    return (
        <Root></Root>

    )
}

export default LoadingIndicator;


